import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  let loggedIn = false;

  // Jwt token
  const jwtToken = sessionStorage.getItem("UserToken");
  let token = JSON.parse(jwtToken);

  if (token) {
    loggedIn = true;
  }

  return !loggedIn ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
