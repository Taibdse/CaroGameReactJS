import React, { Component } from 'react';
import './App.css';
import Todo from '../src/components/Todo';
import Game from "../src/apps/carogames/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Todo />
       <Game />
      </div>
    );
  }
}

export default App;
