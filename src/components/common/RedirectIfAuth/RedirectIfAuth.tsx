import { Navigate, Outlet } from 'react-router-dom';

export const RedirectIfAuth = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        if (user.admin === 'admin' && user.password === 'admin') {
            <Navigate to="/" replace />;
        }
    }

    return <Outlet />;
};
