import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue ?? 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + (this.props.incrementAmount ?? 1),
      });
    }, this.props.incrementInterval ?? 1000);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
