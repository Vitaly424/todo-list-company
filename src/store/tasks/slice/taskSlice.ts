import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/task';

const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];

const initialState: TaskSchema = {
    items: tasks,
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Task[]>) {
            console.log('action', action.payload);
            state.items = action.payload;
        },
        removeTasks(state) {
            state.items = [];
        },
    },
});

export const { actions: tasksActions } = taskSlice;
export const { reducer: tasksReducer } = taskSlice;
