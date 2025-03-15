import AppLayout from '@/AppLayout';
import HistoryPage from '@/components/user/transaction/history/History';
import CardPurchasePage from '@/pages/user/card/Purchase';
import CardRechargePage from '@/pages/user/card/Recharge';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import TransferPage from '@/pages/user/transaction/Transfer';
import WithdrawPage from '@/pages/user/transaction/Withdraw';
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
                                <HistoryPage />
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
                                <TransferPage />
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
                                <WithdrawPage />
                            </>
                        ),
                    },
                ],
            },
        ],
    },
    {
        path: '/admin',
        element: <div>login page</div>,
    },
]);
