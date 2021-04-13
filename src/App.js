import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI";
import SearchForBook from "./SearchForBook";
import BooksList from "./BooksList";

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

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
              <BooksList changeBookShelf={this.changeBookShelf} books={this.state.books}/>
          )} />
          <Route exact path='/search' render={() => (
              <SearchForBook  changeBookShelf={this.changeBookShelf} />
          )} />
      </div>
    )
  }
}

export default BooksApp
