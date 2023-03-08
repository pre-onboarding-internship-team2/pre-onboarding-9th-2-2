import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

export default function Router() {
  let element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/main" />,
    },
    {
      path: '/main',
      element: <Main />,
    },
    {
      path: '/reservations',
      element: <Reservation />,
    },
  ]);
  return element;
}

