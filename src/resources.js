export function createTodoResource(payload) {
  return fetch("localhost:8080/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
}
