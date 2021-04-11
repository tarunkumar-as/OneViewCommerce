import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { AnyAction } from "redux";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import "isomorphic-fetch";

import HomePage from "../../components/users/HomePage";

type DispatchExts = ThunkDispatch<any, any, AnyAction>;

const middlewares = [thunk];
const mockStore = configureMockStore<any, DispatchExts>(middlewares);

// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe("<HomePage />", () => {
  let homePageTest: any;
  beforeEach(() => {
    const { findByTestId } = render(
      <Provider store={mockStore({ userReducer: { users: [] } })}>
        <HomePage />
      </Provider>
    );
    homePageTest = findByTestId;
  });

  it("defines the component", () => {
    expect(homePageTest).toBeDefined();
  });

  it("defines search table", async () => {
    expect(await homePageTest("users-search")).toBeInTheDocument();
  });

  it("defines users table", async () => {
    expect(await homePageTest("users-table")).toBeInTheDocument();
  });
});
