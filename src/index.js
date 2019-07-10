import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { todoApp } from "./reducers";
import { addTodo, toggleTodo } from "./actions";

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State Change:", store.getState())
);

store.dispatch(addTodo("First Todo"));
store.dispatch(addTodo("Completed Todo"));
store.dispatch(toggleTodo("Completed Todo"));

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
