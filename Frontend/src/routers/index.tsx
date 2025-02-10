import AppLayout from '@/AppLayout';
import CardRechargePage from '@/pages/CardRecharge';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import { Helmet } from 'react-helmet-async';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/card-recharge',
                element: (
                    <>
                        <Helmet>
                            <title>Đổi thẻ cào</title>
                        </Helmet>
                        <CardRechargePage />
                    </>
                ),
            },
        ],
    },
    {
        path: '/login',
        element: <div>login page</div>,
    },
    {
        path: '/logout',
        element: <div>logout page</div>,
    },
    {
        path: '/register',
        element: <div>register page</div>,
    },
]);
