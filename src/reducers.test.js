import { todoApp } from "./reducers";
import { addTodo, toggleTodo } from "./actions";

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

test("toggle a todo", () => {
  const initialState = {
    todos: [{ title: "Clean kitchen", completed: false }]
  };

  const result = todoApp(initialState, toggleTodo("Clean kitchen"));

  expect(result).toEqual({
    todos: [{ title: "Clean kitchen", completed: true }]
  });
});
