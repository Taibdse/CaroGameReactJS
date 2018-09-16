import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {time: ''}
  }

  componentDidMount(){
    setInterval(() => {
      // this.formatDate(this.state.time)
      this.formatDate(new Date());
    }, 1000);
  }

  formatDate(date){
    // date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // console.log(year, month, day, hour, min, sec);
    let time = `${day}-${month + 1}-${year} ${hour}:${min}:${sec}`
    this.setState({time: time});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Timer</h4>
              </div>
              <div className="card-body">
                <strong>
                  {this.state.time}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;