import React, { useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import FooterPage from "../components/Footer/Footer";

import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function SavedBooks() {
  const [books, setBooks] = useState([])

  useEffect(() => {
   getBooks()
  }, [])

  const getBooks = () => {
    API.getBooks().then(books => setBooks([...books.data]))
  }
  const handleClick = (id) => {
    API.deleteBook(id).then(() => getBooks())

  }

console.log(books)

    return (
      <Container size="md-6 sm-12">
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                      <img className="mx-auto d-block" src={book.image} />
                      <br />
                        <strong>
                        <div className="text-center">
                          {book.title} by {book.author}
                          </div>
                        </strong>
                      </a>
                      <p>
                        {book.description}
                      </p>
                      
                    <DeleteBtn onClick={()  => handleClick(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            <FooterPage />
      </Container>
    );
  }


export default SavedBooks;
