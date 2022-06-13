import React from "react";
import { useSelector } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const location = useLocation();

  if (isAuthenticated) return children;
  return <Navigate to="/login" state={{ from: location }} repalce />;
};

export default RequiredAuth;
