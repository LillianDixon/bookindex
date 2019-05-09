import React, { Component } from 'react';
import BookIndex from "./bookindex";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Book Index</h1>
        <hr />
        <BookIndex />
      </div>
    );
  }
}
