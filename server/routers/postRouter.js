const { newPost, getSinglePost, updatePost, deletePost, getAllPost } = require("../controllers/postControler");

const postRouter = require("express").Router();
postRouter.post("/posts", newPost);

postRouter.get("/posts/:id", getSinglePost);
postRouter.put("/posts/:id", updatePost);
postRouter.delete("/posts/:id", deletePost);
postRouter.get("/posts", getAllPost);

module.exports =postRouter