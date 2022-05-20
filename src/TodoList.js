import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Red", "Yellow", "Orange"],
  };

  handleAddItem = () => {
    const newItem = this.newItem.value;

    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <input
          ref={(input) => (this.newItem = input)}
          type="text"
          placeholder="Item"
        ></input>
        <button type="submit" onClick={this.handleAddItem}>
          Add Item
        </button>
        <ul>
          {items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
