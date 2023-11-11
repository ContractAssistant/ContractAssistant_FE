import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
