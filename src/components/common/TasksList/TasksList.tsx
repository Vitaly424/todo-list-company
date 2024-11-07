import { Button } from '@/components/ui/Button/Button';
import React, { useEffect, useMemo } from 'react';
import { TaskItem } from '../TaskItem/TaskItem';
import { getTaskSelector } from '@/store/tasks/selectors/getTaskSelector';
import { useSelector } from 'react-redux';
import { Task, TypeTask } from '@/store/tasks/types/task';

interface TasksListProps {
    className?: string;
}

export const TasksList = (props: TasksListProps) => {
    const { className } = props;
    const { items: tasks } = useSelector(getTaskSelector);

    const [activeTask, setActiveTask] =
        React.useState<TypeTask>('all_business');

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            if (activeTask === 'all_business') {
                return task;
            } else if (task.type === activeTask) {
                return task;
            }
        });
    }, [activeTask, tasks]);

    useEffect(() => {
        console.log('tasks', tasks);
    }, [tasks]);

    return (
        <div className={`p-4 mt-4 bg-slate-300 rounded-xl ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                <Button
                    variant={activeTask === 'all_business' ? 'green' : 'blue'}
                    onClick={() => setActiveTask('all_business')}
                >
                    Все дела ({tasks.length})
                </Button>

                <Button
                    variant={
                        activeTask === 'сurrent_affairs' ? 'green' : 'blue'
                    }
                    onClick={() => setActiveTask('сurrent_affairs')}
                >
                    Текущие дела (
                    {
                        tasks.filter((task) => task.type === 'сurrent_affairs')
                            .length
                    }
                    )
                </Button>

                <Button
                    variant={
                        activeTask === 'completed_tasks' ? 'green' : 'blue'
                    }
                    onClick={() => setActiveTask('completed_tasks')}
                >
                    Выполненные дела (
                    {
                        tasks.filter((task) => task.type === 'completed_tasks')
                            .length
                    }
                    )
                </Button>
                <Button
                    variant={activeTask === 'basket' ? 'green' : 'blue'}
                    onClick={() => setActiveTask('basket')}
                >
                    Корзина (
                    {tasks.filter((task) => task.type === 'basket').length})
                </Button>
            </div>

            {filteredTasks.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {filteredTasks.map((task) => (
                        <TaskItem
                            key={task._id}
                            type={task.type}
                            value={task.value}
                            _id={task._id}
                        />
                    ))}
                </div>
            ) : (
                <h1 className="py-4">Список задач пуст</h1>
            )}
        </div>
    );
};
