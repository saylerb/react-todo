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
