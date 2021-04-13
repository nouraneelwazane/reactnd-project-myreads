import React, { Component } from 'react'
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from 'react-router-dom';

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
           <Link
               className='open-search'
               to='/'>
               <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
           </Link>
        <div className="search-books-input-wrapper">
         <input type="text" onChange={(event) => this.searchForBook(event.target.value)} placeholder="Search by title or author"/>
        </div>
       </div>
       <div className="search-books-results">
        <ol className="books-grid">
         {
          this.state.books &&
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