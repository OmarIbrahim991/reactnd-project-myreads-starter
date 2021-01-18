import React from 'react'
import PropTypes from "prop-types"


const Book = ({ book, move, getShelf }) => (
    <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || "default.png"} )` }}
            ></div>
            <div className="book-shelf-changer">
                <select value={book.shelf || getShelf(book.id)} onChange={e => move(e, book)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join()}</div>
    </div>
)

Book.propTypes = {
    book: PropTypes.object.isRequired,
    move: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
}

export default Book
