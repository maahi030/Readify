import bookModel from "../models/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json("Error fetching books" + error);
  }
};
