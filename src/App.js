import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <Container title="My Awesome Application">
        <Hello />
        <Welcome renderAge={true} />
        <Counter initialValue={5} incrementInterval={500} incrementAmount={5} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <br />
        <TodoList />
      </Container>
    );
  }
}
