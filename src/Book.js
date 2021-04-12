import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Book extends Component {
    /*static propTypes = {
        details: PropTypes.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    }*/
    render(){
        const { details } = this.props
        console.log(details.id);
        return (
            <li key={details.id} >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${details.image})` }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{details.title}</div>
                    {
                        details.authors.map((author) => (
                            <div className="book-authors" key={author}>{author}</div>
                        ))
                    }

                </div>
            </li>
        )
    }
}

export default Book