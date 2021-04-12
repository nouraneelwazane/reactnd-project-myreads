import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        details: PropTypes.object.isRequired,
        changeBookShelf: PropTypes.func.isRequired,
    }
    handleSelect = (e) => {
        //e.preventDefault();

        if (this.props.changeBookShelf) {
            this.props.changeBookShelf(this.props.details,e.target.value);
        }
    }
    render(){
        const { details} = this.props
        return (
            <li >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${details.previewLink})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={details.shelf} onChange={this.handleSelect}>
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