import { createBrowserRouter } from 'react-router-dom';

import NotFound from '@pages/NotFound';

import Main from '@components/Main';

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
