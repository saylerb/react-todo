import { createTodoResource } from "./resources";

export const TODO_ADDED = "TODO_ADDED";
export const TODO_TOGGLED = "TODO_TOGGLED";

export function addTodo(title) {
  return {
    type: TODO_ADDED,
    title
  };
}

export function toggleTodo(title) {
  return {
    type: TODO_TOGGLED,
    title
  };
}

// Action to create the todo
// fetching/net is mocked out
// return an response object with json(), some json object -> { id: 1, title: "someTitle" }
//

// TODO: check for response.ok - sad path test for 500 error

export function createTodo(title) {
  return function(dispatch) {
    return createTodoResource(title)
      .then(response => response.json())
      .then(json => dispatch(addTodo(json.title)));
  };
}
