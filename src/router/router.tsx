import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

export default function Router() {
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="main" element={<Main />} />
      <Route path="reservations" element={<Reservation />}/>
    </Routes>
  )
}

