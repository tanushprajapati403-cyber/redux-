import React from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layout/AuthLayout";
import HomePage from "../pages/HomePage";
import SongPage from "../pages/SongPage";
import MainLayout from "../layout/MainLayout";
import LikedSongs from "../pages/LikedSongs";
import ProtectedRouter from "../Components/ProtectedRouter";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>

        <Route element={<ProtectedRouter />}>
          <Route path="/Home" element={<MainLayout />}>
            <Route path="/Home" element={<HomePage />}></Route>
            <Route path="/Home/LikedSongs" element={<LikedSongs />}></Route>
            <Route path="/Home/songs" element={<SongPage />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
