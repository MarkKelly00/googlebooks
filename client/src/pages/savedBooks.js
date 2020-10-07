import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";

import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function SavedBooks() {
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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Google Book Search</h1>
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
          </Col>
          <Col size="md-6 sm-12">
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book.id}>
                      <a href={"/books/" + book._id}>
                      <img src={book.volumeInfo.imageLinks.thumbnail} />
                      <br />
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
                      </a>
                      <p>
                        {book.volumeInfo.description}
                      </p>
                      <button onClick={() => {
                        API.saveBook({
                          title: book.volumeInfo.title,
                          authors: book.volumeInfo.authors,
                          description: book.volumeInfo.description,
                          image: book.volumeInfo.thumbnail,
                          link: book.selfLink,
                        })
                      }}>
                        Save
                      </button>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default SavedBooks;
