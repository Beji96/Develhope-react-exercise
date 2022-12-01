// Create a TodoList component that renders
//  a ul tag with a li tag for each item
//  contained in the items state variable.
//  The items state variable should be an
//  array of strings. The TodoList component
//  should also contain an input tag and a
//  button. When the button is clicked, the
//  event handler should add the value of
//  the input tag to the items array.

import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    newTodo: "",
    items: [],
  };
  inputChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };
  btnClick = () => {
    // e.preventDefault();
    const id = this.state.items.length + 1;
    this.setState({
      items: [...this.state.items, { id, title: this.state.newTodo }],
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <div>
          <button type="button" onClick={this.btnClick}>
            add
          </button>
          <input
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.inputChange}
          />
        </div>
      </div>
    );
  }
}
