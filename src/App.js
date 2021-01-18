import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './pages/ListBooks'
import SearchBooks from './pages/SearchBooks'


class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then(books => this.setState({ books }))
    }

    getShelf = bookID => {
        const filteredBooks = this.state.books.filter(b => b.id === bookID)
        if (!filteredBooks || filteredBooks.length === 0) { return "none" }
        return filteredBooks[0].shelf || "none"
    }

    move = (e, book) => {
        BooksAPI.update(book, e.target.value)
        .then(resp => {
            this.setState(currentState => {
                const allBooks = [...currentState.books]
                if (allBooks.filter(b => b.id === book.id).length === 0) { allBooks.push(book) }
                const updatedBooks = allBooks.map(b => {
                    if (resp.currentlyReading.includes(b.id)) { b.shelf = "currentlyReading" }
                    else if (resp.read.includes(b.id)) { b.shelf = "read" }
                    else if (resp.wantToRead.includes(b.id)) { b.shelf = "wantToRead" }
                    else {b.shelf = "none"}
                    return b
                })
                return { books: updatedBooks.filter(b => b.shelf || b.shelf !== "none") }
            })
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" render={ () => <ListBooks books={this.state.books} move={this.move} getShelf={this.getShelf} /> } />
                    <Route path="/search" render={ () => <SearchBooks move={this.move} getShelf={this.getShelf} /> } />
                </div>
            </BrowserRouter>
 
        )
    }
}

export default BooksApp
