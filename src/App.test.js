import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, cleanup } from "@testing-library/react";

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
