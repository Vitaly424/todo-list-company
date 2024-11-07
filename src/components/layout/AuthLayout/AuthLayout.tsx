import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PageLoader } from '@/components/Common/PageLoader/PageLoader.tsx';
import { ToastContainer } from 'react-toastify';
import { MainHeader } from '../MainLayout/MainHeader/MainHeader';

export const AuthLayout = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        if (user.login === 'admin' && user.password === 'admin') {
            return <Navigate to="/" replace />;
        }
    }

    return (
        <>
            <MainHeader />

            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>

            <ToastContainer />
        </>
    );
};
