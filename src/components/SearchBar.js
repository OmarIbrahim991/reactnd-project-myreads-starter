import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'


class SearchBar extends React.Component {
    state = { query: "" }

    static propTypes = {
        search: PropTypes.func.isRequired
    }

    handleChange = e => this.setState({ query: e.target.value })

    handleKey = e => e.key === "Enter" ? this.props.search(this.state.query) : null

    render() {
        return (
        <div className="search-books-bar">
            <Link to="/">
                <button className="close-search" style={{ cursor: "pointer" }}>Close</button>
            </Link>
            <div className="search-books-input-wrapper">
                <input type="text"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKey}
                    value={this.state.query}
                    placeholder="Search by title or author"
                />
            </div>
        </div>
        )
    }
}

export default SearchBar
