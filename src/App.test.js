import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

test("renders without crashing", () => {
  const { getByText } = render(<App />);

  const text = getByText("Hello, World!");

  expect(text).toHaveClass("greeting");
});

test("it displays one by default", () => {
  const { getByTestId } = render(<App />);

  const count = getByTestId("count");

  expect(count).toHaveTextContent("0");
});

test("increment the count", () => {
  const { getByText, getByTestId } = render(<App />);

  const button = getByText("+");

  fireEvent.click(button);

  const count = getByTestId("count");

  expect(count).toHaveTextContent("1");
});

test("decrement the count", () => {
  const { getByText, getByTestId } = render(<App />);

  expect(getByTestId("count")).toHaveTextContent("0");

  fireEvent.click(getByText("-"));

  expect(getByTestId("count")).toHaveTextContent("-1");
});
