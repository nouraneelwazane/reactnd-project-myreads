import React from 'react'
import './App.css'
import Book from "./Book";
import { Route } from 'react-router-dom'
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import SearchForBook from "./SearchForBook";

class BooksApp extends React.Component {
    state ={
        books :[],
    }

    updateBooksState = () => {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    componentDidMount() {
        this.updateBooksState();
    }

    changeBookShelf = (book, shelf) => {
        BooksAPI.update(book,shelf)
            .then(() => {
                this.updateBooksState();
            })
    }
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
  //}

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchForBook  changeBookShelf={this.changeBookShelf} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookShelf changeBookShelf={this.changeBookShelf} books={this.state.books} shelf='Want to Read' />
                  <BookShelf changeBookShelf={this.changeBookShelf} books={this.state.books} shelf='Currently Reading' />
                  <BookShelf changeBookShelf={this.changeBookShelf} books={this.state.books} shelf='Read' />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
