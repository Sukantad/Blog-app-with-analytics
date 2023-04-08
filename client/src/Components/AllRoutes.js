import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          {" "}
        </Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
