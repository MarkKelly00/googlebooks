import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import FooterPage from "../components/Footer/Footer";

import API from "../utils/API";
import { Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn/saveBtn";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])



  // Loads all books and sets them to books
  function handleBookSearch(event) {
    event.preventDefault();
    const book = event.target.search.value;

    API.searchBooks(book)
      .then(res => {
        console.log(res.data);
        setBooks(res.data.items)
      })
      .catch(err => console.log(err));
  };


    return (
      <Container lg>
            <Jumbotron>
              <h1 className="display-5 text-info text-wrap">Google Book Search</h1>
            </Jumbotron>
            <form onSubmit={handleBookSearch}>
              <Input
                onChange={() => {}}
                name="search"
                placeholder="Search"
              />
              <FormBtn
                onClick={() => {}}
                type="submit"
              >
                Search
              </FormBtn>
            </form>
            <Row>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book.id}>
                      <a href={"/books/" + book._id}>
                      <img className="mx-auto d-block" src={book.volumeInfo.imageLinks.thumbnail} />
                      <br />
                        <strong>
                          <div className="text-center">
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                          </div>
                        </strong>
                      </a>
                      <p>
                        {book.volumeInfo.description}
                      </p>
                      <SaveBtn onClick={() => {
                        API.saveBook({
                          title: book.volumeInfo.title,
                          author: book.volumeInfo.authors,
                          description: book.volumeInfo.description,
                          image: book.volumeInfo.imageLinks.thumbnail,
                          link: book.selfLink,
                        })
                      }}>
                        Save
                      </SaveBtn>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
        <FooterPage />
      </Container>
      
    );
  }


export default Books;
