"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

type Task = {
  id: number;
  title: string;
  status: string;
};

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      if (!res.ok) throw new Error('Failed to fetch tasks'); // Added check for response status
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      toast.error(error instanceof Error ? error.message :"Failed to fetch tasks");
    }
  };

  const addTask = async () => {
    const trimmedTitle = title.trim(); // Trim title once
    if (!trimmedTitle) {
      toast.error("Please enter a task title");
      return;
    }

    setIsLoading(true);
    const tempId = Date.now();
    const newTask = { id: tempId, title: trimmedTitle, status: "pending" };

    // Optimistically add the task
    setTasks(prev => [...prev, newTask]);
    setTitle(''); // Clear input after optimistic update

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmedTitle, status: "pending" }), // Send trimmed title
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: 'Failed to create task' })); // Handle potential JSON parse error
        throw new Error(errorData.message || "Failed to create task");
      }

      toast.success("Task created!");
      fetchTasks(); // Refresh to get the real ID and ensure consistency
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create task");
      // Rollback optimistic update on failure
      setTasks(prev => prev.filter(t => t.id !== tempId));
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (id: number) => {
    const previousTasks = [...tasks];
    // Optimistically remove the task
    setTasks(prev => prev.filter(t => t.id !== id));

    try {
      const taskToDelete = previousTasks.find(t => t.id === id);
      if (!taskToDelete) throw new Error("Task not found"); // Ensure task exists before deleting

      const res = await fetch("/api/tasks", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        // Send only the ID for deletion as per typical REST practices
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
         const errorData = await res.json().catch(() => ({ message: 'Failed to delete task' }));
         throw new Error(errorData.message || 'Failed to delete task');
      }
      toast.success("Task deleted!");
      // No need to fetchTasks() here as the optimistic update is confirmed
    } catch (error) {
      toast.error(error instanceof Error ? error.message :"Failed to delete task");
      // Rollback optimistic update
      setTasks(previousTasks);
    }
  };

  const updateTaskStatus = async (id: number, status: string) => {
    const previousTasks = [...tasks];
    // Optimistically update the task
    setTasks(prev => 
      prev.map(t => t.id === id ? { ...t, status } : t)
    );

    try {
      const taskToUpdate = previousTasks.find(t => t.id === id);
      if (!taskToUpdate) throw new Error("Task not found");

      const res = await fetch("/api/tasks", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // Send ID, title, and the new status as required by the API
        body: JSON.stringify({ id, title: taskToUpdate.title, status }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: 'Failed to update task' }));
        throw new Error(errorData.message || 'Failed to update task');
      }
      toast.success("Task updated!");
      // No need to fetchTasks() here as the optimistic update is confirmed
    } catch (error) {
      toast.error(error instanceof Error ? error.message :"Failed to update task");
      // Rollback optimistic update
      setTasks(previousTasks);
    }
  };

  // Main container with padding and max-width, matching minimalist design
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Task Manager</h1>
        </div>

        {/* Input section */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              placeholder="Enter new task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && addTask()} // Prevent adding on Enter while loading
            />
            <button 
              className="inline-flex justify-center items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={addTask}
              disabled={isLoading || !title.trim()} // Disable if loading or title is empty
            >
              {isLoading ? (
                <>
                  {/* Loading spinner SVG */}
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : 'Add Task'}
            </button>
          </div>
        </div>

        {/* Task list */}
        <ul className="divide-y divide-gray-200">
          {/* Message shown when there are no tasks */}
          {tasks.length === 0 && !isLoading && (
            <li className="p-6 text-center text-gray-500">
              No tasks yet. Add one above!
            </li>
          )}
          {/* Map through tasks and display them */}
          {tasks.map((task) => (
            <li 
              key={task.id} 
              className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              {/* Task title and status badge */}
              <div className="flex-1 mb-3 sm:mb-0 mr-4"> {/* Added margin-right */}
                <p className="text-base font-medium text-gray-900 break-words">{task.title}</p>
                <span 
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${ 
                    task.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800' 
                  }`}
                >
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
              </div>
              {/* Action buttons */}
              <div className="flex gap-2 flex-shrink-0">
                <button
                  className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white transition duration-150 ease-in-out ${ 
                    task.status === 'pending' 
                      ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' 
                      : 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400' 
                  } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                  onClick={() => updateTaskStatus(task.id, task.status === "pending" ? "completed" : "pending")}
                >
                  {task.status === "pending" ? "Complete" : "Undo"}
                </button>
                <button
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
