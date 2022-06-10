// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import { incrementCounter } from "./state/CounterReducer";
import { store } from "./state/Store";
import { addTodos } from "./state/TodosReducer";
// import { Root } from "./Root";

// ReactDOM.render(<Root />, document.getElementById("root"));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(addTodos({ id: 1, title: "Title", complited: true }));
