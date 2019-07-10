export const TODO_ADDED = "TODO_ADDED";
const TODO_REMOVED = "TODO_REMOVED";

export function addTodo(title) {
  return {
    type: TODO_ADDED,
    title
  };
}

export function removeTodo() {
  return {
    type: TODO_REMOVED
  };
}
