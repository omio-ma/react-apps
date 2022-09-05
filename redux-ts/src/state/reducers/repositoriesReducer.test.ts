import reducer, { RepositoriesState } from "./repositoriesReducer";

test("returns default state", () => {
  const defaultState: RepositoriesState = {
    data: [""],
    error: "",
    loading: true
  };

  const reducerResponse = reducer(defaultState, {});

  expect(reducerResponse.data).toBe(defaultState.data);
  expect(reducerResponse.error).toBe(defaultState.error);
  expect(reducerResponse.loading).toBe(defaultState.loading);
});

test("returns state specefic for searching repositories", () => {
  const defaultState: RepositoriesState = {
    data: [""],
    error: "",
    loading: true
  };

  const reducerResponse = reducer(defaultState, {
    type: "search_repositories"
  });

  expect(reducerResponse.data).toEqual([]);
  expect(reducerResponse.error).toBeNull();
  expect(reducerResponse.loading).toBe(true);
});

test("returns state specefic for search_repositories payload", () => {
  const defaultState: RepositoriesState = {
    data: [""],
    error: "",
    loading: true
  };

  const reducerResponse = reducer(defaultState, {
    type: "search_repositories"
  });

  expect(reducerResponse.data).toEqual([]);
  expect(reducerResponse.error).toBeNull();
  expect(reducerResponse.loading).toBe(true);
});

test("returns state specefic for search_repositories_success payload", () => {
  const defaultState: RepositoriesState = {
    data: [""],
    error: "",
    loading: true
  };

  const payloadData = ["payload"];

  const reducerResponse = reducer(defaultState, {
    type: "search_repositories_success",
    payload: payloadData
  });

  expect(reducerResponse.data).toEqual(payloadData);
  expect(reducerResponse.error).toBeNull();
  expect(reducerResponse.loading).toBe(false);
});

test("returns state specefic for search_repositories_error payload", () => {
  const defaultState: RepositoriesState = {
    data: [""],
    error: "",
    loading: true
  };

  const payloadData = "error";

  const reducerResponse = reducer(defaultState, {
    type: "search_repositories_error",
    payload: payloadData
  });

  expect(reducerResponse.data).toEqual([]);
  expect(reducerResponse.error).toBe(payloadData);
  expect(reducerResponse.loading).toBe(false);
});
