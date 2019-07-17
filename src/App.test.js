import React from "react";
import App from "./App";
import {
  render,
  cleanup,
  fireEvent,
  wait,
  getByLabelText
} from "@testing-library/react";
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

  const { getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const todosList = getByLabelText(/all todos/i);

  expect(todosList).toHaveTextContent("Clean Kitchen");

  const html = `<li>Clean Kitchen</li>`;
  expect(todosList).toContainHTML(html);
});

test("displays completed state when todo is completed", () => {
  store.dispatch(addTodo("Clean Kitchen"));
  store.dispatch(toggleTodo("Clean Kitchen"));

  const { getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const todosList = getByLabelText(/all todos/i);
  const html = `<li class="completed">Clean Kitchen</li>`;

  expect(todosList).toContainHTML(html);
});

test("can add a todo by typing into an input field", () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const inputField = getByLabelText(/add todo/i);

  fireEvent.change(inputField, { target: { value: "New Test Todo" } });

  fireEvent.click(getByText(/submit/i));

  // TODO: remove todos test id
  expect(getByLabelText("All todos")).toHaveTextContent("New Test Todo");
});

test("toggle a todo state should cross it out", async () => {
  store.dispatch(addTodo("Existing Todo"));

  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const existingTodoNode = getByLabelText(/all todos/i).firstChild;

  expect(existingTodoNode.innerHTML).toEqual("Existing Todo");
  expect(existingTodoNode).not.toHaveClass("completed");

  const element = getByText(/existing todo/i);

  fireEvent.click(element);

  expect(existingTodoNode).toHaveClass("completed");
});
