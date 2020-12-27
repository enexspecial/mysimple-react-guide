import React, { Component } from 'react';
import Person from './Persons/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      {name:"Edeboh", age:27},
      {name:"Chidinma", age:26},
      {name:"Tolu", age:29}
    ],
    other_values: "Something else"
  }
  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName, age:27},
        {name:"Chidinma Emea", age:26},
        {name:"Tolu", age:29}
      ]
    })
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'Edeboh Emeka', age:27},
        {name:event.target.value, age:26},
        {name:"Tolu", age:29}
      ]
    })

  }
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
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Edeboh Emeka')}>Toggle Person</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Henry!')}
        changed = {this.nameChangeHandler}
        >She is my wife</Person>
        <Person 
        name={this.state.persons[2].name}  
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
