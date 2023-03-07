import { createBrowserRouter } from 'react-router-dom';

import Main from '@pages/Main';
import NotFound from '@pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/', // Container for all Routes
    element: <Main />,
    children: [
      {
        path: '/main',
        element: <Main />,
        errorElement: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
