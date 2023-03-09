import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReservationsPage from "./pages/ReservationsPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/main");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
