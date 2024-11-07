import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainLayout } from '@/components/Layout/MainLayout/MainLayout.tsx';
import { AuthLayout } from '@/components/layout/AuthLayout/AuthLayout';
import LoginPage from '@/pages/LoginPage/LoginPage';

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
            },
        ],
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};
