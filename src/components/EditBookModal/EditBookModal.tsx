import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../../store/slices/booksSlice";
import { v4 as uuidv4 } from "uuid";
import ImageUploader from "../ImageUploader/ImageUploader";
import { Book } from "../../../types";

interface Props {
  isActive: boolean;
  setEditBookActive: React.Dispatch<React.SetStateAction<boolean>>;
  book: Book;
}

const EditBookModal = ({ isActive, setEditBookActive, book }: Props) => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState(book);

  const handleAddImage = (image: string) => {
    setNewBook((prevBook) => ({ ...prevBook, image }));
  };

  const handleEditBook = () => {
    dispatch(editBook(newBook));

    setEditBookActive(false);
  };

  const handleEmptyFields = () => {
    const { author, category, description, image, price, title } = newBook;

    if (!author || !category || !description || !image || !price || !title) {
      return true;
    }

    return false;
  };

  return (
    <div className={`modal ${isActive && "modal--open"}`}>
      <div className="modal__content">
        <h2>Edit Book</h2>
        <form>
          <div className="modal__input-container">
            <label>Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            />

            <label>Author</label>
            <input
              type="text"
              id="author"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            />
            <label>Description</label>
            <textarea
              placeholder="Description"
              value={newBook.description}
              onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
            />

            <label>Price</label>
            <input
              type="text"
              id="price"
              placeholder="Price"
              value={newBook.price}
              onChange={(e) => setNewBook({ ...newBook, price: Number(e.target.value) })}
            />

            <label>Category</label>
            <input
              type="text"
              id="category"
              placeholder="Category"
              value={newBook.category}
              onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
            />
          </div>

          <ImageUploader handleAddImage={handleAddImage} />

          <button className="modal__button" disabled={handleEmptyFields()} type="button" onClick={handleEditBook}>
            Edit Book
          </button>
        </form>
        <button
          className="close-button"
          onClick={() => {
            setEditBookActive(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditBookModal;
