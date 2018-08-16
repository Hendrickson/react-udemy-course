import React from "react";
import Radium from "radium";

const cockpit = props => {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "16px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black"
    }
  };

  if (props.showPersons) {
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black"
    };
  }

  let classes = [];
  if (props.numberOfPersons <= 2) {
    classes.push("red");
    if (props.numberOfPersons <= 1) {
      classes.push("bold");
    }
  }

  return (
    <React.Fragment>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>It is actually working</p>
      <button style={style} onClick={props.click}>
        Toogle Persons
      </button>
    </React.Fragment>
  );
};

export default Radium(cockpit);
