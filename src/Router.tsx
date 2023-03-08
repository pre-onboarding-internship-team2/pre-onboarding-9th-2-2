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
        errorElement: <NotFoundPage />,
      },
      {
        path: "/main",
        element: <MainPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/reservations",
        element: <ReservationPage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

export default Router;
