export type TypeTask =
    | 'сurrent_affairs'
    | 'all_business'
    | 'completed_tasks'
    | 'basket';

export interface Task {
    _id: string;
    type: TypeTask;
    value: string;
}

export interface TaskSchema {
    items: Task[];
}
