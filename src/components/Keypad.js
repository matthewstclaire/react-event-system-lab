// Code Keypad Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  typing = () => {
    console.log("Entering password...");
  };

  render() {
    return <input type="password" onKeyUp={this.typing} />;
  }
}
