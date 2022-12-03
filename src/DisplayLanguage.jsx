import React from "react";
import { LanguageContext } from "./LanguageContext";
import Consumer from "./Consumer";

export class DisplayLanguage extends React.Component {
  state = {
    language: "en",
  };
  changeHandler = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.changeHandler}>
          <option value="en">English</option>
          <option value="ro">Romanian</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <div>{this.state.language}</div>
        </LanguageContext.Provider>
        <Consumer />
      </div>
    );
  }
}