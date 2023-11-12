import { Routes, Route } from "react-router-dom";
import Main from "./page/MainPage";
import GptPage from "./page/GptPage";
import LoginPage from "./page/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Main />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/gpt" element={<GptPage />} />
    </Routes>
  );
};

export default Router;
