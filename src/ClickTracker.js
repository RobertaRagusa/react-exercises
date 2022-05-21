import React from "react";

export class ClickTracker extends React.Component {
  state = { buttonName: "" };

  handleButtonClick = (event) => {
    this.setState({
      buttonName: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <button name="Btn1" onClick={this.handleButtonClick}>
          Button one
        </button>
        <button name="Btn2" onClick={this.handleButtonClick}>
          Button two
        </button>
        <button name="Btn3" onClick={this.handleButtonClick}>
          Button three
        </button>
        <h1>{this.state.buttonName}</h1>
      </div>
    );
  }
}
