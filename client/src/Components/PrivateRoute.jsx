import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { token } = useSelector((state) => state.AuthState);


  if (token) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default PrivateRoute;
