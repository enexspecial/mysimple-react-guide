import React, { Component } from 'react';
import Person from './Persons/Person';

import './App.css';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hello I am A React App</h1>
        <p>This is really working !</p>
        <button style={style}>Toggle Person</button>
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
