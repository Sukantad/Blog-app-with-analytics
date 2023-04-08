import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { token } = useSelector((state) => state.AuthState);

  // const sg=false;

  if (!token) {
    return <Navigate to="/signup" />;
  }else{
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
