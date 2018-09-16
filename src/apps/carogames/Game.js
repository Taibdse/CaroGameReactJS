import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {size: 12};
  }

 

  handleClickOnSquare(){
   
  }


  render() {
    return (
      <div className="container">
        <Board size={this.state.size}/>
      </div>
    );
  }
}

export default Game;