// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import {
  decrementCounter,
  incrementCounter,
  reset,
} from "./state/CounterReducer";
import { store } from "./state/Store";
import { addTodos, editTodos, removeTodos } from "./state/TodosReducer";
// import { Root } from "./Root";

// ReactDOM.render(<Root />, document.getElementById("root"));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(2));
store.dispatch(reset());
store.dispatch(addTodos({ id: 1, title: "Title one", complited: true }));
store.dispatch(addTodos({ id: 2, title: "Title two", complited: true }));
store.dispatch(editTodos(2, { title: "Title two update" }));
store.dispatch(removeTodos(1));
