import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    input: ""
  };

  inputChangeHandler = event => {
    this.setState({
      input: event.target.value
    });
  };

  clickHandler = index => {
    let input = this.state.input.split("");
    input.splice(index, 1);
    const updatedInput = input.join("");
    this.setState({ input: updatedInput });
  };

  render() {
    const charList = this.state.input.split("").map((c, index) => {
      return (
        <Char char={c} key={index} click={() => this.clickHandler(index)} />
      );
    });

    return (
      <div>
        <input
          type="text"
          onChange={event => this.inputChangeHandler(event)}
          value={this.state.input}
        />
        <p>{this.state.input.length}</p>
        <Validation textLength={this.state.input.length} />
        {charList}
      </div>
    );
  }
}

export default App;
