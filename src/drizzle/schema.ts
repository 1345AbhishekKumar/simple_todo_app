import { integer, pgTable, text,pgEnum ,varchar } from "drizzle-orm/pg-core";

export const taskStatusEnum = pgEnum('task_status', ['pending', 'in_progress', 'completed']);

export const tasks = pgTable("tasks", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar("user_id", { length: 256 }).notNull(),   //clerkID
  title: text('title').notNull(),
  status: taskStatusEnum('status').default('pending').notNull(),
  // createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  // updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
})