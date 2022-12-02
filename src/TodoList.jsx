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
    this.setState({
      newTodo: "",
    });
  };

  resetClick = () => {
    this.setState({
      todolist: [],
      toDo: "",
    });
  };

  deleteItem = (event) => {
    const itemNumber = event.target.parentNode.getAttribute("name");
    console.log(itemNumber);
    const rm = this.state.todolist[itemNumber - 1];
    this.setState({
      todolist: this.state.todolist.filter((e) => e !== rm),
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id} name={item.title}>
              {item.title}
              <button type="button" onClick={this.deleteItem}>
                Delete
              </button>
            </li>
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

          <button type="reset" onClick={this.resetClick}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}
