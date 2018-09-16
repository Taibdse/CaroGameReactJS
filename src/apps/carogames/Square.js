import React, { Component } from 'react';
import carogameStore from '../../store/carogame.store';

class Square extends Component {

  constructor(props){
    super(props);
    this.state = {
      val: '',
      style : {
        width: '100px',
        height: '100px',
        borderRadius: '1px solid #ccc',
        fontSize : '1.4em',
        color: '',
        fontWeight: 'bold'
      }
    };
  }

  handleClick = () => {
    if(this.state.val != '') return;
    let { detemineXIsNext } = carogameStore.getState();
    let { index } = this.props;
    if(detemineXIsNext) this.changeStyleX()
    else this.changeStyleO();
    this.props.onClick(index);
  }

  changeStyleX(){
    this.setState((prevState, props) => {
      prevState.val = 'X';
      let style = Object.assign({}, prevState.style);
      style.color = 'green';
      prevState.style = style;
      return prevState;
    })
  }

  changeStyleO(){
    this.setState((prevState, props) => {
      prevState.val = 'O';
      let style = Object.assign({}, prevState.style);
      style.color = 'red';
      prevState.style = style;
      return prevState;
    })
  }

  render() {
    
    return (
      <button onClick={this.handleClick} style={this.state.style}>
        {this.state.val}
      </button>
    );
  }
}

export default Square;