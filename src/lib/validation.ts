import { z } from 'zod';

// Zod schema for task creation (POST) and task update (PUT)
export const taskSchema = z.object({
  title: z.string().min(1, "Title is required"), // Title should be a non-empty string
  status: z.enum(["pending", "completed"]).optional(), // Optional status (default is pending)
});

export type TaskInput = z.infer<typeof taskSchema>; // Type inference for TypeScript
