import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { rootReducer } from "../store/rootStore";

import HomePage from "../components/users/HomePage";

import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";

import { AppState } from "../store/rootStore";
import { AppActions } from "../store/models/actions";

type DispatchExts = ThunkDispatch<AppState, undefined, AppActions>;

const middlewares = [thunk];
const mockStore = configureMockStore<AppState, DispatchExts>(middlewares);

// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe("<HomePage />", () => {
  const props: any = {
    handleSubmit: jest.fn(),
  };

  let findByTestId: any;
  beforeEach(() => {
    findByTestId = render(
      <Provider store={mockStore()}>
        <HomePage />
      </Provider>
    );
  });

  it("defines the component", () => {
    // console.log('wrapper is', wrapper.debug());
    expect(findByTestId).toBeDefined();
  });

  //   it("renders form component", () => {
  //     expect(findByTestId.find('[form="user"]').first()).toHaveLength(1);
  //   });

  // const { findByTestId } = render(
  //   <Provider store={store}>
  //     <HomePage />
  //   </Provider>
  // );
  // const loginForm = await findByTestId("login-form");

  // expect(loginForm).toHaveFormValues({
  //   username: "",
  //   password: "",
  //   remember: true,
  // });
});
// });
