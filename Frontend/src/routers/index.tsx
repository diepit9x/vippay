import AppLayout from '@/components/user/layout/AppLayout';
import HistoryPage from '@/components/user/transaction/history/History';
import CardPurchasePage from '@/pages/user/card/Purchase';
import CardRechargePage from '@/pages/user/card/Recharge';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import TransferPage from '@/pages/user/transaction/Transfer';
import WithdrawPage from '@/pages/user/transaction/Withdraw';
import { Helmet } from 'react-helmet-async';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import Dashboard from '@/components/admin/dashboard';
import MemberList from '@/components/admin/member/list';
import MemberTransaction from '@/components/admin/member/transaction';
import APIManagement from '@/components/admin/api';
import ArticleManagement from '@/components/admin/article';
import Setting from '@/components/admin/setting';
import CardPurchaseList from '@/components/admin/card/purchase/list/CardList';
import CardPurchaseManagement from '@/components/admin/card/purchase/management';
import CardRechargeList from '@/components/admin/card/recharge/list/CardRechargeList';
import CardRechargeManagement from '@/components/admin/card/recharge/management';

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
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: (
                    <>
                        <Helmet>
                            <title>Dashboard</title>
                        </Helmet>
                        <Dashboard />
                    </>
                ),
            },
            {
                path: 'dashboard',
                element: (
                    <>
                        <Helmet>
                            <title>Dashboard</title>
                        </Helmet>
                        <Dashboard />
                    </>
                ),
            },
            {
                path: 'card',
                children: [
                    {
                        path: 'purchase',
                        children: [
                            {
                                path: 'list',
                                element: (
                                    <>
                                        <Helmet>
                                            <title>Danh sách mua thẻ</title>
                                        </Helmet>
                                        <CardPurchaseList />
                                    </>
                                ),
                            },
                            {
                                path: 'management',
                                element: (
                                    <>
                                        <Helmet>
                                            <title>Quản lý mua thẻ</title>
                                        </Helmet>
                                        <CardPurchaseManagement />
                                    </>
                                ),
                            },
                        ],
                    },
                    {
                        path: 'recharge',
                        children: [
                            {
                                path: 'list',
                                element: (
                                    <>
                                        <Helmet>
                                            <title>Danh sách đổi thẻ</title>
                                        </Helmet>
                                        <CardRechargeList />
                                    </>
                                ),
                            },
                            {
                                path: 'management',
                                element: (
                                    <>
                                        <Helmet>
                                            <title>Quản lý đổi thẻ</title>
                                        </Helmet>
                                        <CardRechargeManagement />
                                    </>
                                ),
                            },
                        ],
                    },
                ],
            },
            {
                path: 'member',
                children: [
                    {
                        path: 'list',
                        element: (
                            <>
                                <Helmet>
                                    <title>Danh sách thành viên</title>
                                </Helmet>
                                <MemberList />
                            </>
                        ),
                    },
                    {
                        path: 'transaction',
                        element: (
                            <>
                                <Helmet>
                                    <title>Giao dịch thành viên</title>
                                </Helmet>
                                <MemberTransaction />
                            </>
                        ),
                    },
                ],
            },
            {
                path: 'api',
                element: (
                    <>
                        <Helmet>
                            <title>Tích hợp</title>
                        </Helmet>
                        <APIManagement />
                    </>
                ),
            },
            {
                path: 'article',
                element: (
                    <>
                        <Helmet>
                            <title>Bài viết</title>
                        </Helmet>
                        <ArticleManagement />
                    </>
                ),
            },
            {
                path: 'setting',
                element: (
                    <>
                        <Helmet>
                            <title>Cài đặt</title>
                        </Helmet>
                        <Setting />
                    </>
                ),
            },
        ],
    },
]);
