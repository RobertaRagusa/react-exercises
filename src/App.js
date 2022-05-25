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
import { GithubUser } from "./GithubUser";

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
        <Counter
          initialValue={5}
          incrementInterval={10000}
          incrementAmount={5}
        />
        <ClickCounter
          onCounterChange={(counter) => {
            console.log(`The count is: ${counter}`);
          }}
        />
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
        <Sum />
        <GithubUser username="RobertaRagusa" />
      </Container>
    );
  }
}
