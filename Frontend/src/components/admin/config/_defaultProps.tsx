import {
    CodeOutlined,
    CreditCardOutlined,
    CrownFilled,
    DashboardOutlined,
    FileTextOutlined,
    SettingOutlined,
    TabletFilled,
} from '@ant-design/icons';

export default {
    route: {
        routes: [
            {
                path: '/admin/dashboard',
                name: 'Dashboard',
                icon: <DashboardOutlined />,
            },
            {
                path: '/',
                name: 'Thẻ cào',
                icon: <CreditCardOutlined />,
                routes: [
                    {
                        path: '/',
                        name: 'Đổi thẻ',
                        icon: <CreditCardOutlined />,
                        routes: [
                            {
                                path: '/admin/card/recharge/list',
                                name: 'Danh sách',
                            },
                            {
                                path: '/admin/card/recharge/management',
                                name: 'Giao dịch',
                            },
                        ],
                    },
                    {
                        path: '/',
                        name: 'Mua thẻ',
                        routes: [
                            {
                                path: '/admin/card/purchase/list',
                                name: 'Danh sách',
                            },
                            {
                                path: '/admin/card/purchase/management',
                                name: 'Giao dịch',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Thành viên',
                path: '/',
                icon: <TabletFilled />,
                routes: [
                    {
                        path: '/admin/member/list',
                        name: 'Danh sách',
                        icon: <CrownFilled />,
                    },
                    {
                        path: '/admin/member/transaction',
                        name: 'Giao dịch',
                        icon: <CrownFilled />,
                    },
                ],
            },
            {
                path: '/admin/api',
                name: 'API',
                icon: <CodeOutlined />,
            },
            {
                path: '/admin/article',
                name: 'Tin tức',
                icon: <FileTextOutlined />,
            },
            {
                path: '/admin/setting',
                name: 'Cài đặt',
                icon: <SettingOutlined />,
            },
        ],
    },
    location: {
        pathname: '/admin/dashboard',
    },
};
