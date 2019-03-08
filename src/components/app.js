import React, { Component } from 'react';
import BookIndex from "./bookIndex";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <BookIndex />
      </div>
    );
  }
}
