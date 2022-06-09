import React from "react";
import { Route, Routes } from "react-router-dom";
// import { CarDetails } from "./CarDetails";
// import { ClickCounter } from "./ClickCounter";
// import { Counter } from "./Counter";
// import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
// import { ClickTracker } from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { TodoList } from "./TodoList";
import { Container } from "./Container";
// import { FilteredList } from "./FilteredList";
// import { HookCounter } from "./HookCounter";
// import { HookForm } from "./HookForm";
// import { LanguageContext } from "./LanguageContext";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { Sum } from "./Sum";
// import { GithubUser } from "./GithubUser";
// import { GithubUserList } from "./GithubUserList";

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
        <Routes>
          <Route path="/" element={<Welcome name="Roberta" />} />
        </Routes>
        {/*<Hello />
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
          <GithubUserList />
        <HookCounter />
        <HookForm />
        <CarDetails
          initialData={{ model: "Fiat 500", year: 2022, color: "Black" }}
        />
        <FilteredList />*/}
      </Container>
    );
  }
}
