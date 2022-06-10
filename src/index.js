// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import { incrementCounter } from "./state/CounterReducer";
import { store } from "./state/Store";
// import { Root } from "./Root";

// ReactDOM.render(<Root />, document.getElementById("root"));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
