import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = { clickedBtn: null };

  btnHandler = (event) => {
    this.setState({ clickedBtn: event.target.textContent });
  };

  render() {
    return (
      <div>
        <button onClick={this.btnHandler}>First</button>
        <button onClick={this.btnHandler}>Second</button>
        <button onClick={this.btnHandler}>Third</button>
        {this.state.clickedBtn && (
          <h1>{this.state.clickedBtn} button is working</h1>
        )}
      </div>
    );
  }
}