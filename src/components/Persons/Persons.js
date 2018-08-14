import React, { PureComponent } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount");
  }

  componentWillUnmount() {
    console.log("[Persons.js] Inside componentWillUnmount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Persons.js] Inside componentWillReceiveProps");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE Persons.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   console.log(nextProps.persons);
  //   console.log(this.props.persons);
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.change !== this.props.change ||
  //     nextProps.click !== this.props.click
  //   );
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] Inside render");
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.click(index)}
            change={event => this.props.change(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
