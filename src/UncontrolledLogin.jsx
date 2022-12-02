import React, { Component, createRef } from "react";

export default class UncontrolledLogin extends Component {
  _formRef = createRef();
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
  handlePrefill = () => {
    this._formRef.current.elements.username.value = "flavius96";
    this._formRef.current.elements.password.value = "hello1212";
    this._formRef.current.elements.remember.checked = true;
  };

  render() {
    return (
      <div>
        UncontrolledLogin
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="checkbox" name="remember" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handlePrefill}>
            Prefill
          </button>
        </form>
      </div>
    );
  }
}
