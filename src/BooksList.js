import React from "react";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

class BooksList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeBookShelf: PropTypes.func.isRequired
    }
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf changeBookShelf={this.props.changeBookShelf} books={this.props.books} shelf='Currently Reading' />
                        <BookShelf changeBookShelf={this.props.changeBookShelf} books={this.props.books} shelf='Read' />
                        <BookShelf changeBookShelf={this.props.changeBookShelf} books={this.props.books} shelf='Want to Read' />
                    </div>
                </div>
                <Link
                    className='open-search'
                    to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        )
    }
}

export default BooksList;