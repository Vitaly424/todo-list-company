import { Button } from '@/components/ui/Button/Button';
import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const navigate = useNavigate();

    const [loginValue, setLoginValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');

    const login = () => {
        if (loginValue === 'admin' && passwordValue === 'admin') {
            localStorage.setItem(
                'user',
                JSON.stringify({ login: loginValue, password: passwordValue }),
            );

            navigate('/');

            toast.success('Вы успешно вошли', {
                position: 'bottom-right',
                autoClose: 2000,
            });
        } else {
            toast.error('Неверный логин или пароль', {
                position: 'bottom-right',
                autoClose: 2000,
            });
        }
    };

    return (
        <form className={'max-w-96 w-full p-4 mt-4 bg-slate-300 rounded-xl'}>
            <h2 className="text-center text-md">Вход</h2>

            <p>
                Логин: <span className="font-semibold">admin</span>
            </p>
            <p>
                Пароль: <span className="font-semibold">admin</span>
            </p>

            <div className="flex flex-col gap-2 mt-4">
                <input
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}
                    className="py-2 px-4 bg-slate-700 text-white rounded-xl"
                    placeholder="Ваш логин"
                />

                <input
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    className="py-2 px-4 bg-slate-700 text-white rounded-xl"
                    placeholder="Ваш пароль"
                />
            </div>

            <div className="flex justify-center mt-4">
                <Button onClick={login}>Войти</Button>
            </div>
        </form>
    );
};
