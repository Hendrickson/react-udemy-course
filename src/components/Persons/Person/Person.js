import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
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
          ref={this.inputElement}
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );

    // return [
    //   <p key="1" onClick={this.props.click}>
    //     I'm {this.props.name} I am {this.props.age} years old!
    //   </p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input
    //     key="3"
    //     type="text"
    //     onChange={this.props.change}
    //     value={this.props.name}
    //   />
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default Radium(Person);
