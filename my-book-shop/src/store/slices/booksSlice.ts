import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../../types";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";

interface BooksState {
  books: Book[];
  status: "loading" | "success" | "failed" | "idle";
  error?: string;
}

const initialState: BooksState = {
  books: [],
  status: "idle",
};

const API_KEY = "";

export const getBook = (state: RootState, id: string) => {
  return state.books.books.find((book) => book.id === id);
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();

    const bookList: Book[] = data.results.lists[0].books.map((book: any) => {
      return {
        id: uuidv4(),
        author: book.author,
        title: book.title,
        description: book.description,
        image: book.book_image,
        category: "Fiction",
        price: 10,
      };
    });

    return bookList;
  } catch (error) {
    throw error;
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action: PayloadAction<Book>) => {
      const updatedBook = action.payload;
      const bookIndex = state.books.findIndex(
        (book) => book.id === updatedBook.id
      );

      if (bookIndex !== -1) {
        const updatedBooks = [...state.books];
        updatedBooks[bookIndex] = updatedBook;

        state.books = updatedBooks;
      }
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "success";
        state.books = action.payload;
        state.error = "";
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook, editBook } = booksSlice.actions;

export default booksSlice.reducer;
