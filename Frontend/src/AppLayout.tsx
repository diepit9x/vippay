import { Outlet } from 'react-router-dom';
import AppHeader from '@/components/user/layout/AppHeader';
import AppFooter from '@/components/user/layout/AppFooter';
import '@/styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    );
};

export default AppLayout;
