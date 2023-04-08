require("dotenv").config();
const Users = require("../models/userModel");

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await Users.findById({ _id: id });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ message: "User Exists", user });
  } catch (error) {
    console.log(error, "error while fetching single user");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  try {
    let user = await Users.findByIdAndUpdate(id, { name, bio }, { new: true });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ user });
  } catch (error) {
    console.log(error, "error while  updating user");
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await Users.findOneAndDelete({ _id: id });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res
      .status(200)
      .send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error, "error while deleting the user");
  }
};

const getAllUsers = async (req, res) => {
  try {
    let user = await Users.find();
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ user });
  } catch (error) {
    console.log(error, "error while  find all the user");
  }
};

module.exports = {
  getSingleUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
