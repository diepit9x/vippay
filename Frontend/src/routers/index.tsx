import AppLayout from '@/AppLayout';
import CardPurchasePage from '@/pages/card/Purchase';
import CardRechargePage from '@/pages/card/Recharge';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import { Helmet } from 'react-helmet-async';
import { createBrowserRouter, Navigate } from 'react-router-dom';

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
            {
                path: '/card-purchase',
                element: (
                    <>
                        <Helmet>
                            <title>Mua thẻ cào điện thoại, thẻ game</title>
                        </Helmet>
                        <CardPurchasePage />
                    </>
                ),
            },
            {
                path: '/transaction',
                children: [
                    { index: true, element: <Navigate to="history" replace /> },
                    {
                        path: 'history',
                        element: (
                            <>
                                <Helmet>
                                    <title>Lịch sử giao dịch</title>
                                </Helmet>
                                <div>History page</div>
                            </>
                        ),
                    },
                    {
                        path: 'transfer',
                        element: (
                            <>
                                <Helmet>
                                    <title>Chuyển tiền</title>
                                </Helmet>
                                <div>Chuyển tiền page</div>
                            </>
                        ),
                    },
                    {
                        path: 'withdraw',
                        element: (
                            <>
                                <Helmet>
                                    <title>Rút tiền</title>
                                </Helmet>
                                <div>Rút tiền page</div>
                            </>
                        ),
                    },
                ],
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
