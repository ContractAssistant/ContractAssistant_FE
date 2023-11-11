import { Routes, Route } from "react-router-dom";
import Main from "./page/MainPage";
import Login from "./page/login";
import GptPage from "./page/GptPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gpt" element={<GptPage />} />
    </Routes>
  );
};

export default Router;
