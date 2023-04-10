import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const userId = localStorage.getItem("userId") || null;


  if (!userId) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default PrivateRoute;
