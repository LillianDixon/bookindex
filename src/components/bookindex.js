import React, { Component } from 'react';
import BooksImg from "../../static/assets/images/books.jpg";
import DeleteAction from "./deleteAction";
import {Link} from "react-router-dom";

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
        // <div className='app' style={{backgroundImage: "url(" + BooksImg +")" }}>
        <div className="content">
            <h1>List of books</h1>
            {console.log('book state', this.state.books)}
            {this.state.books.map((book) => (
                <div key={book[0]}>
                    <h2>Book Title: {book[1]}</h2>
                    <h3>Author: {book[2]}</h3>
                    <div className="links">
                        <Link to={`/view_book/${book[0]}`}>View Book</Link>
                        <DeleteAction id ={book[0]} />
                    </div>
                </div>
            ))}
        </div>
    //   </div>
    );
  }
}
