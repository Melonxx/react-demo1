import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child'

class App extends Component {
  constructor () {
    super()
    this.state = {date: 1111, to: ''}
    this.to = '4564sasdfasfsafa56s4'
  }
  daIt() {
    this.setState({date: this.state.date + 1})
    this.setState({date: this.state.date + 1})
    this.setState({date: this.state.date + 1})
  }
  fn(a) {
    this.setState({
      to: a
    })
  }
  render() {
    let arr = [1,2,3,5,6,7]
    return (
      <div className="App">
        {this.state.to}
        <Child fatherData={this.to} fatherFn={this.fn.bind(this)}></Child>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.msg}
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{ this.state.date }</p> 
          <button onClick={this.daIt.bind(this)}>dianji</button>
          { arr.map((v) => <p key={v.toString()}>{v+1}</p>) }
        </header>
      </div>
    );
  }
}

export default App;
