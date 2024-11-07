import { Task } from '@/store/tasks/types/task';
import { Check, Trash2 } from 'lucide-react';
import cn from 'classnames';
import { useAppDispatch } from '@/store';
import { useSelector } from 'react-redux';
import { getTaskSelector } from '@/store/tasks/selectors/getTaskSelector';
import { tasksActions } from '@/store/tasks/slice/taskSlice';
import { toast } from 'react-toastify';

interface TasksItemProps extends Task {
    className?: string;
}

export const TaskItem = (props: TasksItemProps) => {
    const { type, value, _id, className } = props;
    const dispatch = useAppDispatch();
    const { items: tasks } = useSelector(getTaskSelector);

    const onCheckTask = () => {
        let newTasks: Task[];

        if (type === 'completed_tasks') {
            newTasks = tasks.map((task) => {
                if (task._id === _id) {
                    return { ...task, type: 'сurrent_affairs' };
                }

                return task;
            });

            toast.success('Задача успешно перенесена в раздел текущие дела', {
                position: 'bottom-right',
                autoClose: 2000,
            });
        } else {
            newTasks = tasks.map((task) => {
                if (task._id === _id) {
                    return { ...task, type: 'completed_tasks' };
                }

                toast.success(
                    'Задача успешно перенесена в раздел выполненные дела',
                    {
                        position: 'bottom-right',
                        autoClose: 2000,
                    },
                );

                return task;
            });
        }

        localStorage.setItem('tasks', JSON.stringify(newTasks));
        dispatch(tasksActions.addTask(newTasks));
    };

    const onRemoveTask = () => {
        let newTasks: Task[];

        if (tasks.length) {
            if (type === 'basket') {
                if (
                    confirm('Вы уверены, что хотите полностью удалить задачу?')
                ) {
                    newTasks = tasks.filter((task) => task._id !== _id);

                    localStorage.setItem('tasks', JSON.stringify(newTasks));
                    dispatch(tasksActions.addTask(newTasks));

                    toast.success('Задача успешно удалена', {
                        position: 'bottom-right',
                        autoClose: 2000,
                    });
                }
            } else {
                if (
                    confirm(
                        'Вы уверены, что хотите переместить задачу в корзину?',
                    )
                ) {
                    newTasks = tasks.map((task) => {
                        if (task._id === _id) {
                            return { ...task, type: 'basket' };
                        }

                        return task;
                    });

                    localStorage.setItem('tasks', JSON.stringify(newTasks));
                    dispatch(tasksActions.addTask(newTasks));

                    toast.success(
                        'Задача успешно перенесена в раздел корзины',
                        {
                            position: 'bottom-right',
                            autoClose: 2000,
                        },
                    );
                }
            }
        }
    };

    return (
        <div className={` bg-slate-300 rounded-xl ${className}`}>
            <div className="flex gap-4 justify-between p-4 rounded-xl bg-slate-50 w-full">
                <div>
                    <p>{value}</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={onCheckTask}
                        className={cn(
                            `text-white rounded-md p-1 
                                ${type === 'completed_tasks' ? 'bg-emerald-700' : 'bg-gray-600'}
                            `,
                        )}
                        type="button"
                    >
                        <Check />
                    </button>
                    <button
                        onClick={onRemoveTask}
                        className={cn(
                            ` text-white rounded-md p-1  ${type === 'basket' ? 'bg-red-400' : 'bg-gray-600'}`,
                        )}
                        type="button"
                    >
                        <Trash2 />
                    </button>
                </div>
            </div>
        </div>
    );
};
