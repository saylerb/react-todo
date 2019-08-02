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

export function createTodo(title) {
  return function(dispatch) {
    return createTodoResource(title).then(json =>
      dispatch(addTodo(json.title))
    );
  };
}
