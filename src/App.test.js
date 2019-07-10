import React from "react";
import App from "./App";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";

import { createStore } from "redux";
import { todoApp } from "./reducers";
import { addTodo, toggleTodo } from "./actions";

let store;

beforeEach(() => {
  store = createStore(todoApp);
});

afterEach(cleanup);

test("it displays existing todos", () => {
  store.dispatch(addTodo("Clean Kitchen"));

  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const todosList = getByTestId("todos");

  expect(todosList).toHaveTextContent("Clean Kitchen");

  const html = `<li>Clean Kitchen</li>`;
  expect(todosList).toContainHTML(html);
});

test("displays completed state when todo is completed", () => {
  store.dispatch(addTodo("Clean Kitchen"));
  store.dispatch(toggleTodo("Clean Kitchen"));

  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const todosList = getByTestId("todos");
  const html = `<li class="completed">Clean Kitchen</li>`;

  expect(todosList).toContainHTML(html);
});
