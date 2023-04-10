import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import UserAnalytics from "../pages/UserAnalytics";
import PostAnalytics from "../pages/PostAnalytics";
import CreatePost from "../pages/CreatePost";
import UserList from "../pages/UserList";
import PostList from "../pages/PostList";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/analytics/users" element={<UserAnalytics />}></Route>
        <Route path="/analytics/posts" element={<PostAnalytics />}></Route>

        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
        <Route path="/postlist" element={<PostList />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
