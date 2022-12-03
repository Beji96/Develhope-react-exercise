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

  resetClick = (e) => {
    this.setState({
      newTodo: [],
      // items: "",
    });
    e.preventDefault();
    console.log(this.resetClick);
  };

  deleteItem = (event) => {
    const itemNumber = event.target.parentNode.getAttribute("name");
    console.log(itemNumber);
    const rm = this.state.items[itemNumber - 1];
    this.setState({
      items: this.state.items.filter((e) => e !== rm),
    });
  };

  renderItems = (items, deleteItem) => {
    return items.map((item) => (
      <li key={item.id} name={item.id}>
        {item.title}
        <span> </span>
        <button type="button" onClick={deleteItem}>
          Delete
        </button>
      </li>
    ));
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
          <ul>{this.renderItems(this.state.items, this.deleteItem)}</ul>
        </div>
      </div>
    );
  }
}
