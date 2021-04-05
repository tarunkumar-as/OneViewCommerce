import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { requestUsers } from "../../store/user/UserAction";
import { requestUserPosts } from "../../store/userPost/UserPostAction";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../../store/user/models/actions";
import {
  FETCH_USERPOSTS_REQUEST,
  FETCH_USERPOSTS_SUCCESS,
} from "../../store/userPost/models/actions";

import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action to fetch users", () => {
    const expectedOutput = {
      error: "",
      loading: true,
      type: FETCH_USERS_REQUEST,
      users: [],
    };
    expect(requestUsers()).toEqual(expectedOutput);
  });

  it("should create an action to fetch users", () => {
    const expectedOutput = {
      error: "",
      loading: true,
      type: FETCH_USERPOSTS_REQUEST,
      userPosts: [],
    };
    expect(requestUserPosts()).toEqual(expectedOutput);
  });
});
