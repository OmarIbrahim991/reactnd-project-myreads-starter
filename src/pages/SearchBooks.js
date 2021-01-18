import React from 'react'
import PropTypes from "prop-types"
import * as BooksAPI from '../BooksAPI'
import SearchBar from '../components/SearchBar'
import Book from '../components/Book'


class SearchBooks extends React.Component {
    state = { results: [] }

    static propTypes = {
        move: PropTypes.func.isRequired,
        getShelf: PropTypes.func.isRequired
    }

    search = query => {
        BooksAPI.search(query)
        .then(books => this.setState({ results: books }))
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar search={this.search} />
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.results && this.state.results.length > 0 && (
                                this.state.results.map(result => (
                                    <li key={result.id}>
                                        <Book book={result} move={this.props.move} getShelf={this.props.getShelf} />
                                    </li>
                                ))
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks
