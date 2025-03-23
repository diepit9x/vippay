import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';

export default {
    route: {
        path: '/admin/',
        routes: [
            {
                path: '/welcome',
                name: 'welcome',
                icon: <SmileFilled />,
                component: './Welcome',
            },
            {
                path: '/admin',
                name: 'admin',
                icon: <CrownFilled />,
                access: 'canAdmin',
                component: './Admin',
                routes: [
                    {
                        path: '/admin/sub-page1',
                        name: 'admin page 1',
                        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page2',
                        name: 'admin page 2',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page3',
                        name: 'admin page 3',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                ],
            },
            {
                name: 'List',
                icon: <TabletFilled />,
                path: '/list',
                component: './ListTableList',
                routes: [
                    {
                        path: '/list/sub-page',
                        name: 'Sub page',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: 'sub-sub-page1',
                                name: 'Sub page 1.1',
                                icon: <CrownFilled />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page2',
                                name: 'Sub page 1.2',
                                icon: <CrownFilled />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page3',
                                name: 'Sub page 1.3',
                                icon: <CrownFilled />,
                                component: './Welcome',
                            },
                        ],
                    },
                    {
                        path: '/list/sub-page2',
                        name: 'sub-page 2',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                    {
                        path: '/list/sub-page3',
                        name: 'sub-page 3',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                ],
            },
            {
                path: 'https://ant.design',
                name: 'Ant Design 官网外链',
                icon: <ChromeFilled />,
            },
        ],
    },
    location: {
        pathname: '/admin',
    },
    appList: [
        {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            title: 'Ant Design',
            desc: '杭州市较知名的 UI 设计语言',
            url: 'https://ant.design',
        },
        {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
            title: 'AntV',
            desc: '蚂蚁集团全新一代数据可视化解决方案',
            url: 'https://antv.vision/',
            target: '_blank',
        },
    ],
};
