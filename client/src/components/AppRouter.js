import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import { authRoutes, publicRoutes} from '../routes'

function AppRouter() {
    const isAuth = false;
    return (
      <Routes>
        {isAuth &&
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

export default AppRouter