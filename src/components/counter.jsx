import React, { Component } from 'react';

class Counter extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-4">
        <h2>I am react counter component</h2>
        <span className="badge badge-info mr-3">10</span>
        <button className="btn btn-warning">Press me</button>
      </div>
    );
  }
}

export default Counter;