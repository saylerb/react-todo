const TODO_ADDED = "TODO_ADDED";
const TODO_REMOVED = "TODO_REMOVED";

export function addTodo() {
  return {
    type: TODO_ADDED
  };
}

export function removeTodo() {
  return {
    type: TODO_REMOVED
  };
}
