import { db } from "@/drizzle/db";
import { tasks } from "@/drizzle/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { taskSchema } from "@/lib/validation"; // Import Zod schema
// ========== GET all tasks ==========
export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const userTasks = await db.select().from(tasks).where(eq(tasks.userId, user.id));
  return NextResponse.json(userTasks);
}

// ========== POST new task ==========
export async function POST(req: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    // Validate the request body using Zod
    const { title, status } = await req.json();
    taskSchema.parse({ title, status }); // This will throw an error if validation fails

    const [newTask] = await db.insert(tasks).values({
      userId: user.id,
      title,
      status: status ?? 'pending', // Default status to 'pending' if not provided
    }).returning();


    return NextResponse.json(newTask);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}

// ========== PUT (update task) ==========
export async function PUT(req: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    // Validate the request body using Zod
    const { id, title, status } = await req.json();
    taskSchema.parse({ title, status }); // This will throw an error if validation fails

    await db.update(tasks)
      .set({ title, status })
      .where(eq(tasks.id, id));

    return NextResponse.json({ message: "Task updated" });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}

// ========== DELETE (delete task) ==========
export async function DELETE(req: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();

  await db.delete(tasks)
    .where(eq(tasks.id, id));

  return NextResponse.json({ message: "Task deleted" });
}
