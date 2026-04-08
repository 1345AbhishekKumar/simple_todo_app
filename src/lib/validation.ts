import { z } from 'zod';

// Zod schema for task creation (POST)
export const taskSchema = z.object({
  title: z.string().min(1, "Title is required"), // Title should be a non-empty string
  status: z.enum(["pending", "in_progress", "completed"]).optional(), // Optional status (default is pending)
});

// Zod schema for task update (PUT) — requires a valid task id
export const taskUpdateSchema = taskSchema.extend({
  id: z.number().int().positive("Task id must be a positive integer"),
});

export type TaskInput = z.infer<typeof taskSchema>; // Type inference for TypeScript
export type TaskUpdateInput = z.infer<typeof taskUpdateSchema>;
