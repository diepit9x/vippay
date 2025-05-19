import { LogoutOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { ConfigProvider, Dropdown } from 'antd';
import { useEffect, useState } from 'react';
import defaultProps from '@/components/admin/config/_defaultProps';
import defaultSettings from '@/components/admin/config/defaultSettings';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);

    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    if (typeof document === 'undefined') {
        return <div />;
    }
    return (
        <div
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <ProConfigProvider hashed={true}>
                <ConfigProvider
                    getTargetContainer={() => {
                        return (
                            document.getElementById('test-pro-layout') || document.body
                        );
                    }}
                >
                    <ProLayout
                        className="pro-layout-custom"
                        logo={'https://vippay.vn/public/img/vippay-favicon.png'}
                        title={'VIPPAY'}
                        prefixCls="my-prefix"
                        bgLayoutImgList={[
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                left: 85,
                                bottom: 100,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                bottom: -68,
                                right: -45,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                                bottom: 0,
                                left: 0,
                                width: '331px',
                            },
                        ]}
                        {...defaultProps}
                        location={{
                            pathname,
                        }}
                        token={{
                            header: {
                                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
                            },
                        }}
                        siderMenuType="sub"
                        menu={{
                            collapsedShowGroupTitle: true,
                        }}
                        avatarProps={{
                            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                            size: 'small',
                            title: 'LuaUyTin',
                            render: (props, dom) => {
                                return (
                                    <Dropdown
                                        menu={{
                                            items: [
                                                {
                                                    key: 'logout',
                                                    icon: <LogoutOutlined />,
                                                    label: 'Đăng xuất',
                                                },
                                            ],
                                        }}
                                    >
                                        {dom}
                                    </Dropdown>
                                );
                            },
                        }}
                        menuFooterRender={(props) => {
                            if (props?.collapsed) return undefined;
                            return (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        paddingBlockStart: 12,
                                    }}
                                >
                                    <div>© 2025 Made with love</div>
                                    <div>by Diepit9x</div>
                                </div>
                            );
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        menuItemRender={(menuItemProps, defaultDom) => {
                            // console.log(
                            //     'menuItemProps: ',
                            //     menuItemProps,
                            //     'defaultDom:',
                            //     defaultDom,
                            // );

                            return menuItemProps.isUrl ? (
                                defaultDom
                            ) : (
                                <Link
                                    className="qixian-menuItem"
                                    to={menuItemProps.key || '/'}
                                    onClick={() => {
                                        setPathname(
                                            menuItemProps.path || '/admin/dashboard',
                                        );
                                    }}
                                >
                                    {defaultDom}
                                </Link>
                            );
                        }}
                        {...defaultSettings}
                    >
                        <Outlet />
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    );
};

export default AdminLayout;
