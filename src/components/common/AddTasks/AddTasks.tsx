import { Button } from '@/components/ui/Button/Button';
import { useAppDispatch } from '@/store';
import { getTaskSelector } from '@/store/tasks/selectors/getTaskSelector';
import { tasksActions } from '@/store/tasks/slice/taskSlice';
import { List, Plus } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface FilteringTasksProps {
    className?: string;
}

export const AddTasks = (props: FilteringTasksProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { items: tasks } = useSelector(getTaskSelector);
    const [taskValue, setTaskValue] = React.useState('');

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const addTask = () => {
        if (taskValue) {
            localStorage.setItem(
                'tasks',
                JSON.stringify([
                    {
                        _id: uuidv4(),
                        type: 'сurrent_affairs',
                        value: taskValue,
                    },
                    ...tasks,
                ]),
            );

            dispatch(
                tasksActions.addTask([
                    {
                        _id: uuidv4(),
                        type: 'сurrent_affairs',
                        value: taskValue,
                    },
                    ...tasks,
                ]),
            );

            toast.success('Задача успешно добавлена', {
                position: 'bottom-right',
                autoClose: 2000,
            });

            setTaskValue('');
        } else {
            toast.warn('Поле не может быть пустым', {
                position: 'bottom-right',
                autoClose: 2000,
            });
        }
    };

    const clearTasks = () => {
        if (confirm('Вы уверены, что хотите удалить все задачи?')) {
            localStorage.removeItem('tasks');
            dispatch(tasksActions.removeTasks());
        }
    };

    return (
        <div
            className={`p-4 mt-4 bg-slate-300  flex flex-col items-center md:flex-row md:justify-between gap-1 rounded-xl ${className}`}
        >
            <div className="flex gap-2">
                <input
                    value={taskValue}
                    onChange={(e) => setTaskValue(e.target.value)}
                    className="py-2 px-4 bg-slate-700 text-white rounded-xl"
                    placeholder="Название новой задачи..."
                />

                <Button onClick={addTask} iconRight={<Plus size={20} />}>
                    Добавить
                </Button>
            </div>

            <div className="flex gap-2">
                <Button
                    onClick={clearTasks}
                    iconRight={<List size={20} />}
                    variant="red"
                >
                    Очистить
                </Button>

                <Button onClick={logout}>Выйти</Button>
            </div>
        </div>
    );
};
