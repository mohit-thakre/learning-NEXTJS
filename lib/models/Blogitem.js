import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now(),
  },
  author_img: {
    type: String,
  },
});

module.exports = mongoose.models.blog || mongoose.model("blog", blogSchema);
