import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Red", "Yellow", "Orange"],
    input: "",
  };

  componentDidMount = () => {
    this.setState({
      items: this.state.items.map((item) => <li>{item}</li>),
    });
  };

  handleInput = (event) => {
    const value = event.target.value;

    this.setState({
      input: value,
    });
  };

  addItem = () => {
    this.state.items.push(<li>{this.state.input}</li>);
    this.setState({
      input: "",
    });
  };

  resetItems = () => {
    this.setState({
      items: [],
    });
  };

  removeItems = () => {
    this.state.items.pop(<li>{this.state.input}</li>);
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Item"
          value={this.state.input}
          onChange={this.handleInput}
        ></input>
        <button type="submit" onClick={this.addItem}>
          Add Item
        </button>
        <button name="reset" onClick={this.resetItems}>
          Reset
        </button>
        <button name="remove" onClick={this.removeItems}>
          Remove
        </button>
        {this.props.render(this.state.items)}
      </div>
    );
  }
}
