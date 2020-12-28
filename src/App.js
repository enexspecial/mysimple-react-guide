import React, { Component } from 'react';
import Person from './Persons/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      {id:" jishdfk1", name:"Edeboh", age:27},
      {id:" jdkwew ", name:"Chidinma", age:26},
      {id:"wuie ", name:"Tolu", age:29}
    ],
    other_values: "Something else",
    showPersons: false
  }


  nameChangeHandler=(event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons })

  }

  deleteNameHandler=(personIndex)=>{
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler=()=>{
    const doesShow = this.state.showPersons
    this.setState({ showPersons : !doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let person = null
    if(this.state.showPersons){
      person = (
        <div>
          {this.state.persons.map((person, index )=> {
            return <Person
                  click = {()=> this.deleteNameHandler(index)}
                  name={person.name}
                  age= {person.age}
                  key={person.id}
                  changed = {(event)=>this.nameChangeHandler(event, person.id)}
                  />
          })}
      
      </div> 
      );
    }
    return (
      <div className="App">
        <h1>Hello I am A React App</h1>
        <p>This is really working !</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {person}          
      </div>
    );
  }
}

export default App;
