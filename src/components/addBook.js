import React, { Component } from 'react';

export default class AddBook extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:  "",
            author: "",

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})//use the [] almost everytime there is a form
    }

    handleSubmit(event){
        event.preventDefault()
        let title = this.state.title
        let author = this.state.author

        fetch("https://ld-book-api-practice.herokuapp.com/book/input",{ //fetching our api from postman(or wherever)
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, author})//sets the information to title and author
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push("/")})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }


  render() {
    return (
      <div className='add-book-wrapper'>
        <h1>Add a Book Below</h1>
        {/* creating the input boxes to be able to add new books to our db */}
        <hr />
        <form onSubmit = {this.handleSubmit}>
            <div className="add-title">
                <label>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /> 
            </div>

            <div className="add-author">
                <label>Author</label>
                <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
            </div>

            <div  className="submit">
            <button type="submit" value="submit">Submit</button>

            </div>
        </form>
      </div>
    );
  }
}