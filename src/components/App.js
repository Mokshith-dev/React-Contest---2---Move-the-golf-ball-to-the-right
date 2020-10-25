import React, { Component, useState } from "react";
import "../styles/App.css";
let cnt = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  handleKeyDown(event) {
    cnt++;
    //console.log(this.state[this.ballPosition[this.left]]);
    this.setState({ ballPosition: { left: `${cnt * 5}px` } });
    this.renderChoice();
  }
  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });

    document.addEventListener("keydown", this.handleKeyDown);
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event

  componentDidMount() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
