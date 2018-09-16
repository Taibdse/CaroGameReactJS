import React, { Component } from 'react';
import Square from './Square';
import carogameStore from '../../store/carogame.store';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr_X: [],
      arr_O: [],
      size: this.props.size
    }
  }

  checkWinGame(arr){
    let { size } = this.state;
    for(let i = 0; i < arr.length; i++){
      let temp = arr[i];
      let cond1 = arr.indexOf(temp + 1) > -1 && arr.indexOf(temp + 2) > -1 && arr.indexOf(temp + 3) > -1 && arr.indexOf(temp + 4) > -1;

      let cond2 = arr.indexOf(temp + size) > -1 && arr.indexOf(temp + 2 * size) > -1 && arr.indexOf(temp + 3 * size) > -1 && arr.indexOf(temp + 4 * size) > -1;

      let cond3 = arr.indexOf(temp + size-1) > -1 && arr.indexOf(temp + 2*size-2) > -1 && arr.indexOf(temp + 3*size-3) > -1 && arr.indexOf(temp + 4*size-4) > -1;

      let cond4 = arr.indexOf(temp + size + 1) > -1 && arr.indexOf(temp + 2*size+2) > -1 && arr.indexOf(temp + 3*size+3) > -1 && arr.indexOf(temp + 4*size+4) > -1;
      if(cond1 || cond2 || cond3 || cond4) return true;
    }
    return false;
  }

  handleClickOnSquare = (index) => {
    console.log(carogameStore);
    let { detemineXIsNext } = carogameStore.getState();
    
    console.log(detemineXIsNext);
    if(detemineXIsNext){
      let arr_X = this.state.arr_X;
      arr_X.push(index);
      this.setState((prevState, props) => {
        prevState.arr_X = arr_X;
        return prevState;
      })
      if(this.checkWinGame(arr_X)) return alert('X WIN!!');
    }else{
      let arr_O = this.state.arr_O.slice();

      arr_O.push(index);

      this.setState((prevState, props) => {
        prevState.arr_O = arr_O;
        return prevState;
      })
      if(this.checkWinGame(arr_O)) return alert('O WIN!!');
    }
    carogameStore.dispatch({ type: 'CHANGE' });
  }


  renderSquare(index, val){
    return <Square 
    onClick={this.handleClickOnSquare} 
    index={index}
    key={index}
    />
  }

  render() {
    let { size } = this.state;
    let arrElements = [];
    for(let i = 0; i < Math.pow(size, 2); i++){
      let square = this.renderSquare(i);
      arrElements.push(square);
    }
    return (
      <div> 
        {arrElements}
      </div>
    );
  }
}

export default Board;