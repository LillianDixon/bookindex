import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class UpdateBook extends Component {
    constructor(props){
        super(props)

        this.state ={
            id: 0,
            title: "",
            author: "",
            formHidden: true,
        }
        this.editBook = this.editBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let id = this.state.id;
        let title = this.state.title;
        let author = this.state.author;
        fetch(`http://127.0.0.1:5000/update_book/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, author: author})
        }).then(res => res.json())
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => console.log(err))

    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    editBook(){
            this.setState({id: this.props.ourProp[0]})
            this.setState({title: this.props.ourProp[1]})
            this.setState({author:this.props.ourProp[2]})
            this.setState({formHidden: !this.state.formHidden})
    }

  render() {
    return (
      <div className='update-book-wrapper'>
        <button onClick={this.editBook}>Update this book</button>

        <form onSubmit ={this.handleSubmit} style = {{visibility: this.state.formHidden ? "hidden" : "Visible"}}>
          <div className="update-title">
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="update-author">
            <label>Author</label>
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit" value="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateBook)
