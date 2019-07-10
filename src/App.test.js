import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import { createStore } from "redux";
import { count } from "./reducers";

let store;

beforeEach(() => {
  store = createStore(count);
});

afterEach(cleanup);

test.skip("it displays one by default", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const count = getByTestId("count");

  expect(count).toHaveTextContent("0");
});

test.skip("increment the count", () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const button = getByText("+");

  fireEvent.click(button);

  const count = getByTestId("count");

  expect(count).toHaveTextContent("1");
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
