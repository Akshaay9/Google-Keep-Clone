import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    color: {
      trype: String,
      default: "white",
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
    label: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
