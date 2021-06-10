//import react destructuring Component from react
import { findAllByAltText } from '@testing-library/dom';
import React, { Component } from 'react'
//"extends"-means its inheriting from the parent class
export class App extends Component {
  constructor(props){
    super(props);
    //don't touch this, state is an object
    this.state = {
      count:0
    }
  }

  addCount = ()=>{this.setState({
    count: this.state.count + 1,
  });
};

  minusCount = ()=>{this.setState({
    count: this.state.count - 1,
  });
};


//calling render and returning code
render() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
    <div>Count: {this.state.count}</div>
    <button onClick={this.minusCount}>-</button>
    <button onClick={this.addCount}>+</button>
    </div>
    );
  }
}

export default App

