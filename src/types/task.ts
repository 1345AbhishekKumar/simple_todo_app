// import { z } from 'zod';
// import { taskSchema } from '@/lib/validation';

// Use Zod inference for type safety and consistency
// export type Task = z.infer<typeof taskSchema> & {
//     id: string;
//     title: string;
//     // description: string;
//     status: 'pending' | 'in-progress' | 'completed'	;
// };



export interface Task {
    id: string;
    title: string;
    // description: string;
    status: 'pending' | 'in-progress' | 'completed'	;
}