import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.NEWS} element={<NewsPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
