import React, { Component } from "react";
import Radium from "radium";
import "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount");
  }

  componentWillUnmount() {
    console.log("[Person.js] Inside componentWillUnmount");
  }

  render() {
    console.log("[Person.js] Inside render");

    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //   throw new Error("Something went wrong");
    // }

    const style = {
      "@media(min-width: 500px)": {
        width: "450px"
      }
    };

    return (
      <div className="Person" style={style}>
        <p onClick={this.props.click}>
          I'm {this.props.name} I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Radium(Person);
