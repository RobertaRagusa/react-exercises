import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome renderAge={true} />
        <Counter initialValue={5} incrementInterval={500} incrementAmount={5} />
        <ClickCounter />
      </div>
    );
  }
}
