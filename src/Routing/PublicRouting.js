import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const jwtToken = sessionStorage.getItem("UserToken");
  let token = JSON.parse(jwtToken);

  if (token) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = () => {
  const auth = useAuth();

  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
