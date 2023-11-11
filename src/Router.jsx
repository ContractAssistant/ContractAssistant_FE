import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
