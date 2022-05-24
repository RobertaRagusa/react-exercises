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
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

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
        <TodoList
          render={(items) => {
            const [...item] = items;

            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          }}
        />
        <LanguageContext.Provider value={this.state.language}>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">ENGLISH</option>
            <option value="it">ITALIAN</option>
          </select>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <Sum numbers={[5, 10, 2, 8]} />
      </Container>
    );
  }
}
