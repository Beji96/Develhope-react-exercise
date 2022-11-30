import React, { Component } from "react";

export default class UncontrolledLogin extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    console.log({
      username,
      password,
      remember,
    });
  };

  render() {
    return (
      <div>
        UncontrolledLogin
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="checkbox" name="remember" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
