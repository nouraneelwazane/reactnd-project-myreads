import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchForBook extends Component {

 state = {
  books :[],
 };

 searchForBook = (query) => {
  if (query){
   BooksAPI.search(query)
       .then((result) => {
        if(result.length>0)
        {
         console.log(result);
         this.setState(() => ({
          books: result
         }))
        }
        else{
         this.setState(() => ({
          books:[],
         }))
        }

       })
  }
  else {
   this.setState(() => ({
    books:[],
   }))
  }

 }

 render() {
  const { changeBookShelf } = this.props;
  return(
      <div className="search-books">
       <div className="search-books-bar">
        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
        <div className="search-books-input-wrapper">
         {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
         <input type="text" onChange={(event) => this.searchForBook(event.target.value)} placeholder="Search by title or author"/>

        </div>
       </div>
       <div className="search-books-results">
        <ol className="books-grid">
         {
          this.state.books !== null &&
          this.state.books.map((book) =>(
              <Book key={book.id} details={book} changeBookShelf={changeBookShelf}/>
          ))
         }
        </ol>
       </div>
      </div>
  )
 }
}
 export default SearchForBook;