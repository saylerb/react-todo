// new Promise (resolve, reject) {}
// import fetch from "fetch"; // pretending that fetch is a module, won't work (but would work for axios)

// jest.mock(fetch, jest.fn(() => {
//   return  Promise.resolve(({
//   json: jest.fn(() => Promise.resolve({ title: "clean kitchen"}))
// }));

import { createTodo, addTodo } from "./actions";
import { createTodoResource } from "./resources";

jest.mock("./resources");

test("createTodo adds a todo when 200 ok", () => {
  createTodoResource.mockImplementation(title => {
    let blob = new Blob([JSON.stringify({ title }, null, 2)], {
      type: "application/json"
    });

    return Promise.resolve(new Response(blob, { status: 200 }));
  });

  const title = "do dishes";

  // return createTodoResource(title).then(response => {
  //   expect(response.ok).toBe(true);

  //   return response.json().then(payload => {
  //     expect(payload).toEqual({ title: "do dishes" });
  //   });
  // });

  // if no itermiedate object
  // axiosget.mockImplemetation(() => Promise.resolve({ title: "something" }));
  // axiosget.mockResolvedValue({ title: "something" });

  const dispatch = jest.fn();

  return createTodo(title)(dispatch).then(() => {
    expect(createTodoResource).toHaveBeenCalledTimes(1);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenLastCalledWith(addTodo("do dishes"));
  });
});

test.skip("two 400 error no dispatch of add", () => {
  fetch.mockImplementation(() => ({
    json: () => Promise.reject({ error: " Something happended" })
  }));

  axiosget.mockImplemetation(() => Promise.reject({ error: "something" }));
  axiosget.mockRejectedValue({ title: "something" });
});
