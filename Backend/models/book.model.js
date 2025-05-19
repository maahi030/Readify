import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  autho: String,
  price: Number,
  category: String,
  image: String,
});

const bookModel = mongoose.model("books", bookSchema);

export default bookModel;
