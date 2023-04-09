const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user_id:String,
    content: {
      type:String,
      required:true,
      maxlength:300
    },
    image: {
      type: String,
      required: true,
    },
    likes: {
      type:Number,
      default:0,
      min:0
    }
  },
  {
    timestamps: true,
  }
);
const PostModel = mongoose.model("post",postSchema);
module.exports = PostModel
