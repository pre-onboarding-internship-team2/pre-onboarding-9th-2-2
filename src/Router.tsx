import { createBrowserRouter, Navigate } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReservationPage from "./pages/ReservationPage";

const Router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/main" />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/reservations",
        element: <ReservationPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default Router;
