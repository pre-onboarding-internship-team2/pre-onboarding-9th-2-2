import { createBrowserRouter } from 'react-router-dom';

import EmptyCart from './components/cart/EmptyCart';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Reservation from './pages/Reservation';

const router = createBrowserRouter([
  {
    path: '/', // Container for all Routes
    element: <Main />,
    children: [
      {
        path: 'main',
        element: <Main />,
        errorElement: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/reservation',
    element: <Reservation />,
    children: [
      {
        path: 'empty',
        element: <EmptyCart />,
      },
    ],
  },
]);

export default router;
