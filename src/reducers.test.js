import { todoApp } from "./reducers";
import { increment, decrement, reset } from "./actions";

test("default state to a list of empty todos", () => {
  const initialState = undefined;
  const expectedState = { todos: [] };

  const result = todoApp(initialState, null);

  expect(result).toEqual(expectedState);
});
