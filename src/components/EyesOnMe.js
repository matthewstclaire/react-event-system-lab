// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  handleBtn = () => {
    console.log("Good!");
  };

  handleBtnAgain = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button onFocus={this.handleBtn} onBlur={this.handleBtnAgain}></button>
    );
  }
}
