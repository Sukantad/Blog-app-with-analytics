const {
  newPost,
  getSinglePost,
  updatePost,
  deletePost,
  getAllPost,
  likePostById,
  unLikePostById,
  mostLikedpost,
} = require("../controllers/postControler");

const postRouter = require("express").Router();
postRouter.post("/posts", newPost);
postRouter.get("/posts/:id", getSinglePost);
postRouter.put("/posts/:id", updatePost);
postRouter.delete("/posts/:id", deletePost);
postRouter.post("/posts/:id/like", likePostById);
postRouter.post("/posts/:id/unlike", unLikePostById);
postRouter.get("/analytics/posts", getAllPost);
postRouter.get("/analytics/posts/top-liked", mostLikedpost);

module.exports = postRouter;
