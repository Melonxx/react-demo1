import React, { Component } from 'react';

class Child extends Component {
  constructor() {
    super()
    this.state = {date: 1111};
  }
  fn () {
    this.props.fatherFn('1aaa2345645646589798789')
  }
  render() {
    return (
      <div className="Child" onClick={this.fn.bind(this)}>
        1112222
        {JSON.stringify(this.props.fatherData)}
      </div>
    );
  }
}

export default Child;
