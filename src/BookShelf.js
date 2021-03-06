import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired
    }
    render() {
        const { shelf, books, changeBookShelf } = this.props
        const shelfWithNoWhiteSpace = shelf.replace(/\s/g, "");
        const displayShelfBooks = //get the books corresponding to the current shelf only
            books.filter((b) => (
                b.shelf.toLowerCase() === shelfWithNoWhiteSpace.toLowerCase()
            ))

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            displayShelfBooks.map((book) =>(
                                <Book key={book.id} details={book} changeBookShelf={changeBookShelf}/>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf