import "./BookItem.scss";
import { Book } from "../../../types";
import { removeBook } from "@/store/slices/booksSlice";
import { useDispatch } from "react-redux";
interface Props {
  book: Book;
  handleBookClick: Function;
  setEditBookActive: Function;
}
function BookItem({ book, handleBookClick, setEditBookActive }: Props) {
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();

    dispatch(removeBook(id));
  };

  return (
    <div
      key={book.id}
      className="book"
      onClick={() => {
        setEditBookActive(true);
        handleBookClick(book.id);
      }}
    >
      <img className="book__image" src={book.image} alt="" />
      <h3>
        {book.title} by {book.author}
      </h3>
      <p>{book.description}</p>
      <p>{book.category}</p>
      <p>{book.price}$</p>

      <button
        className="book__button"
        onClick={(e) => {
          handleDelete(e, book.id);
        }}
      >
        Delete book?
      </button>
    </div>
  );
}
export default BookItem;
