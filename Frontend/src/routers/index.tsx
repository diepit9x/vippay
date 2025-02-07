import AppLayout from "@/AppLayout";
import CardExchangePage from "@/pages/cardExchange";
import ErrorPage from "@/pages/errorPage";
import HomePage from "@/pages/homePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/card-exchange",
        element: <CardExchangePage />
      }
    ]
  },
  {
    path: "/login",
    element: <div>login page</div>
  },
  {
    path: "/logout",
    element: <div>logout page</div>
  },
  {
    path: "/register",
    element: <div>register page</div>
  }
]);
