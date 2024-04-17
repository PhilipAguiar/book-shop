"use client";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addBook, fetchBooks, getBook } from "../store/slices/booksSlice";
import { AppDispatch, RootState } from "../store/store";
import { Book } from "../../types";
import AddBookModal from "../components/AddBookModal/AddBookModal";
import EditBookModal from "@/components/EditBookModal/EditBookModal";
import BookItem from "@/components/BookItem/BookItem";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { books, status, error } = useSelector((state: RootState) => state.books);

  const [addBookActive, setAddBookActive] = useState<boolean>(false);
  const [editBookActive, setEditBookActive] = useState<boolean>(false);

  const [activeBook, setActiveBook] = useState<Book>();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleBookClick = (id: string) => {
    setActiveBook(books.find((book) => book.id === id));
  };

  return (
    <div className="home">
      <h1 className="home__title">My Bookstore</h1>
      <button
        className="home__button"
        onClick={() => {
          setAddBookActive(true);
        }}
      >
        Add New Book
      </button>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "success" && (
        <div className="home__book-container">
          {books &&
            books.length > 0 &&
            books.map((book) => <BookItem key={book.id} book={book} setEditBookActive={setEditBookActive} handleBookClick={handleBookClick} />)}
        </div>
      )}
      <AddBookModal isActive={addBookActive} setAddBookActive={setAddBookActive} />
      {activeBook && <EditBookModal isActive={editBookActive} setEditBookActive={setEditBookActive} book={activeBook} />}
    </div>
  );
}
