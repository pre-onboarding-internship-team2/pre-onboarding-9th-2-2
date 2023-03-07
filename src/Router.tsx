import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReservationPage from "./pages/ReservationPage";

// TODO: CommonLayout로 감싸기

const Router = createBrowserRouter([
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
]);

export default Router;
