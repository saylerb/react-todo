import { todoApp } from "./reducers";
import { addTodo } from "./actions";

test("default state to a list of empty todos", () => {
  const initialState = undefined;
  const expectedState = { todos: [] };

  const result = todoApp(initialState, { type: "ACTION_THAT_DOES_NOT_EXIST" });

  expect(result).toEqual(expectedState);
});

test("adding a todo", () => {
  const initialState = { todos: [] };

  const result = todoApp(initialState, addTodo("Todo"));

  expect(result).toEqual({ todos: [{ title: "Todo", completed: false }] });
});
