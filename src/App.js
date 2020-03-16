import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list-component'
import './App.css';
import {Searchbox} from './components/search-box/search-box.component'

class App extends Component{

  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:""
    }

  }

  //componentDidMount is a lifecycle method called immediately after the component is mounted
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters:users }))

  }

  render(){

    const {monsters,searchField}=this.state;
    const filteredMonsters= monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      
    );
    return (
      <div className="App">

        
        <h1>Monsters Rolodex</h1>
        <Searchbox
          placeholder='Search Monsters'
          handleChange={e => this.setState({searchField:e.target.value})}>
        </Searchbox>

        <CardList monsters={filteredMonsters} />
        
          
        
        
      </div>
    );
  };

}

export default App;
