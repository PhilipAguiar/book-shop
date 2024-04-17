import "./AddBookModal.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../../store/slices/booksSlice";
import { v4 as uuidv4 } from "uuid";
import ImageUploader from "../ImageUploader/ImageUploader";

interface Props {
  isActive: boolean;
  setAddBookActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBookModal = ({ isActive, setAddBookActive }: Props) => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    id: uuidv4(),
    title: "",
    author: "",
    description: "",
    image: "",
    price: 0,
    category: "",
  });

  const handleAddImage = (image: string) => {
    setNewBook((prevBook) => ({ ...prevBook, image }));
  };

  const handleAddBook = () => {
    dispatch(addBook(newBook));

    setNewBook({
      id: uuidv4(),
      title: "",
      author: "",
      description: "",
      image: "",
      price: 0,
      category: "",
    });

    setAddBookActive(false);
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
        <h2>Add Book</h2>

        <div className="modal__input-container">
          <label>Title</label>
          <input
            required
            type="text"
            id="title"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />

          <label>Author</label>
          <input
            required
            type="text"
            id="author"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <label>Description</label>
          <textarea placeholder="Description" value={newBook.description} onChange={(e) => setNewBook({ ...newBook, description: e.target.value })} />

          <label>Price</label>
          <input
            required
            type="number"
            id="price"
            placeholder="Price"
            value={newBook.price}
            onChange={(e) => setNewBook({ ...newBook, price: Number(e.target.value) })}
          />

          <label>Category</label>
          <input
            required
            type="text"
            id="category"
            placeholder="Category"
            value={newBook.category}
            onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
          />
          <ImageUploader handleAddImage={handleAddImage} />
        </div>

        <button className="modal__button" disabled={handleEmptyFields()} type="button" onClick={handleAddBook}>
          Add Book
        </button>
        <button
          className="close-button"
          onClick={() => {
            setAddBookActive(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddBookModal;
