const PostModel = require("../models/postModel");

require("dotenv").config();
const newPost = async (req, res) => {
  try {
    const { content, user_id, image } = req.body;

    const new_Post = new PostModel({
      user_id,
      content,
      image,
    });

    await new_Post.save();

    res.send({
      message: "Post created ",
      post: new_Post,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    let post = await PostModel.findById({ _id: id });
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    return res.status(200).send({ post });
  } catch (error) {
    console.log(error, "error while fetching single post");
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { content, image } = req.body;
  try {
    let post = await PostModel.findByIdAndUpdate(
      id,
      { content, image },
      { new: true }
    );
    if (!post) {
      return res.status(404).send({ message: "post not found" });
    }
    return res.status(200).send({ post });
  } catch (error) {
    console.log(error, "error while  updating post");
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    let post = await PostModel.findOneAndDelete({ _id: id });
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    return res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error, "error while deleting the post");
  }
};
const mostLikedpost = async (req, res) => {
  try {
    const LikedPosts = await PostModel.find()
      .sort({ likes: "desc" })
      .limit(5)
      .populate("user_id");
    return res.status(200).send({ LikedPosts });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    let post = await PostModel.find();
    if (!post) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ post });
  } catch (error) {
    console.log(error, "error while  find all  post");
  }
};

const likePostById = async (req, res) => {
  let { id } = req.params;
  let { likes } = req.body;
  try {
    let Post = await PostModel.findByIdAndUpdate(id, { likes }, { new: true });
    if (!Post) {
      return res.status(404).send({ message: "You can't unlike less than 0" });
    }
    return res.status(200).send(Post);
  } catch (error) {
    console.log(error, "error while like the post");
  }
};

const unLikePostById = async (req, res) => {
  let { id } = req.params;
  let { likes } = req.body;
  try {
    let Post;
    if (likes >= 0) {
      Post = await PostModel.findByIdAndUpdate(id, { likes }, { new: true });
    }
    if (!Post) {
      return res.status(404).send({ message: "Post is not exists" });
    }
    return res.status(200).send({ message: "unliked Post", Post });
  } catch (error) {
    console.log(error, "error while dislike the post");
  }
};

module.exports = {
  getSinglePost,
  updatePost,
  deletePost,
  getAllPost,
  newPost,
  likePostById,
  unLikePostById,
  mostLikedpost
};
