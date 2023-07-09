import { useEffect, useState } from "react";
import { SearchAPI } from "../routes/Search";
import Books from "./Books";
import { BorderBottomG } from "../styles/Common";
import {
  TitleEach,
  BookSection,
  BooksBox,
  BooksContents,
} from "../styles/BookStyles";

function BooksNew() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    findBooks();
  }, []);

  const findBooks = async () => {
    const params = {
      query: "2023 year",
      sort: "latest",
      size: "8",
      target: "",
    };
    const {
      data: { documents },
    } = await SearchAPI(params);

    setBooks(documents);
  };

  return (
    <>
      <BookSection className="container">
        <TitleEach>
          <h2>New Arrivals</h2>
          <h1>
            <span className="plus-text">+</span>
          </h1>
        </TitleEach>
      </BookSection>
      <BorderBottomG className="container" />
      <BooksBox className="container">
        {books.map((book, i) => (
          <BooksContents key={i}>
            <Books
              title={book.title}
              image={book.thumbnail}
              author={book.authors}
            />
          </BooksContents>
        ))}
      </BooksBox>
    </>
  );
}

export default BooksNew;
