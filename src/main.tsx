import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary.tsx';
import { AppRouterProvider } from '@/app/providers/RouterProvider/RouterProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './store';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <AppRouterProvider />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
);
