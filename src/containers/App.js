import React, { PureComponent } from "react";
import "./App.css";
import { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  componentWillUnmount() {
    console.log("[App.js] Inside componentWillUnmount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate");
  }

  state = {
    persons: [
      { id: "asd", name: "Max", age: 28 },
      { id: "qwe", name: "Manu", age: 29 },
      { id: "zxc", name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  tooglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    console.log("[App.js] Inside render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          change={this.nameChangedHandler}
        />
      );
    }

    return (
      <StyleRoot>
        {/* <WithClassOld classes={"App"}>
          <button
            onClick={() => {
              this.setState({ showPersons: true });
            }}
          >
            Show Persons
          </button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            numberOfPersons={this.state.persons.length}
            click={this.tooglePersonsHandler}
          />
          {persons}
        </WithClassOld> */}
        <Aux>
          <button
            onClick={() => {
              this.setState({ showPersons: true });
            }}
          >
            Show Persons
          </button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            numberOfPersons={this.state.persons.length}
            click={this.tooglePersonsHandler}
          />
          {persons}
        </Aux>
      </StyleRoot>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a react app!!!")
    // );
  }
}

export default withClass(App, "App");
