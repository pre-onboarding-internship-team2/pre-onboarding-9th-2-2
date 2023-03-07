import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/main");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
