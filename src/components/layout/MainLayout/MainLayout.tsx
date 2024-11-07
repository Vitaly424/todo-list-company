import { MainHeader } from './MainHeader/MainHeader.tsx';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PageLoader } from '@/components/Common/PageLoader/PageLoader.tsx';
import { toast, ToastContainer } from 'react-toastify';

export const MainLayout = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <Navigate to="/login" replace />;
    } else {
        if (user.login !== 'admin' || user.password !== 'admin') {
            return <Navigate to="/login" replace />;
        }
    }

    return (
        <>
            <MainHeader />

            <Suspense fallback={<PageLoader />}>
                <div className="py-4">
                    <Outlet />
                </div>
            </Suspense>

            <ToastContainer />
        </>
    );
};
