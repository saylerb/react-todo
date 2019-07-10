import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";
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

test.skip("decrement the count", () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByTestId("count")).toHaveTextContent("0");

  fireEvent.click(getByText("-"));

  expect(getByTestId("count")).toHaveTextContent("-1");
});

test.skip("reset the count", () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const button = getByText("+");
  fireEvent.click(button);
  fireEvent.click(button);

  expect(getByTestId("count")).toHaveTextContent("2");

  fireEvent.click(getByText("⟲"));

  expect(getByTestId("count")).toHaveTextContent("0");
});
