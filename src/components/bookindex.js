import React, { Component } from 'react';

export default class BookIndex extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: []
        }
    }
    // componentDidMount is used to call the api
    componentDidMount(){
        fetch("http://127.0.0.1:5000/books",{ //fetching our api
            method: "GET",
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({books: data});})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }


  render() {
    return (
      <div className='app'>
        <h1>List of books</h1>
        {this.state.books.map((book) => (
            <div key={book[0]}>
                <h2>Book Title: {book[1]}</h2>
                <h3>Author: {book[2]}</h3>
            </div>
        ))}
      </div>
    );
  }
}
