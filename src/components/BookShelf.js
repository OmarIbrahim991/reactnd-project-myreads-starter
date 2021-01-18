import React from 'react'
import PropTypes from "prop-types"
import Book from './Book'


const BookShelf = ({ shelf, books, move, getShelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">
            {shelf === "currentlyReading" && `Currently Reading`}
            {shelf === "wantToRead" && `Want to Read`}
            {shelf === "read" && `Read`}
        </h2>
        <div className="bookshelf-books">
            {books && books.length > 0 &&
                
                <ol className="books-grid">
                    {
                        books.filter(book => book.shelf === shelf).map(b => (
                            <li key={b.id}>
                                <Book book={b} move={move} getShelf={getShelf} />
                            </li>
                        ))
                    }
                </ol>
            }
        </div>

    </div>
)

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    move: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
}

export default BookShelf
