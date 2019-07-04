import { count } from "./reducers";
import { increment, decrement, reset } from "./actions";

test("default state to count of zero", () => {
  const initialState = undefined;

  const result = count(initialState);

  expect(result).toEqual(0);
});

test("can increment the counter", () => {
  const initialState = 0;

  const result = count(initialState, increment());

  expect(result).toEqual(1);
});

test("decrement the counter", () => {
  const initialState = 0;

  const result = count(initialState, decrement());

  expect(result).toEqual(-1);
});

test("reset the counter", () => {
  const initialState = 100;

  const result = count(initialState, reset());

  expect(result).toEqual(0);
});
