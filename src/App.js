import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import PublicRoutes from "./Routing/PublicRouting";
import PrivateRoute from "./Routing/PrivateRouting";
import OopsComponentPage from "./components/404";
import DashboardPage from "./components/home";
import LoginPage from "./components/login";

function App() {
  return (
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="*" element={<OopsComponentPage home={true} />} />

          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Route>
      {/** End Of  Protected Routes */}

      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="*" element={<PublicRoutes />}>
        <Route path="*" element={<OopsComponentPage home={true} />} />
      </Route>
      {/** End Of Public Routes */}
    </Routes>
  );
}

export default App;
