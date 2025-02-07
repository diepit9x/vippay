import { Outlet } from "react-router-dom";
import AppHeader from "@/components/layout/app.header";
import AppFooter from "@/components/layout/app.footer";
import "@/styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
