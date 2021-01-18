import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import BookShelf from '../components/BookShelf'


const ListBooks = ({ books, move, getShelf }) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <BookShelf books={books} move={move} getShelf={getShelf} shelf="currentlyReading" />
                <BookShelf books={books} move={move} getShelf={getShelf} shelf="wantToRead" />
                <BookShelf books={books} move={move} getShelf={getShelf} shelf="read" />
            </div>
        </div>
        <Link to="/search" className="open-search">
            <button style={{ cursor: "pointer" }}>Add a book</button>
        </Link>
        
    </div>
)

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    move: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
}

export default ListBooks
