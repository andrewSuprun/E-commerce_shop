import { Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

function AppRouter() {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default AppRouter;