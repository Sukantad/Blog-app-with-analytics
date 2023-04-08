const {
  getSingleUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

const usersRouter = require("express").Router();

usersRouter.get("/users/:id", getSingleUser);
usersRouter.put("/users/:id", updateUser);
usersRouter.delete("/users/:id", deleteUser);
usersRouter.get("/analytics/users", getAllUsers);

module.exports =usersRouter