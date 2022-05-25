import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
  const [counter, setCounter] = useState(props.initialValue);

  function Incrementer() {
    setCounter((c) => c + props.incrementAmount);
  }

  useEffect(() => {
    console.log("The counter is mounted");
    const interval = setInterval(() => {
      Incrementer();
    }, props.incrementInterval);
    return () => {
      console.log("The counter is unmounted");
      clearInterval(interval);
    };
  });
  return (
    <div>
      <CounterDisplay count={counter} />
    </div>
  );
}

Counter.defaultProps = {
  initialValue: 0,
  incrementAmount: 1,
  incrementInterval: 1000,
};

/*export class Counter extends React.Component {
  state = {
    count: this.props.initialValue ?? 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + (this.props.incrementAmount ?? 1),
      });
    }, this.props.incrementInterval ?? 1000);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}*/
