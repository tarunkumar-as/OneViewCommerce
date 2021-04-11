import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { AnyAction } from "redux";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import "isomorphic-fetch";

import UserDetailTable from "../../components/posts/UserDetailTable";

type DispatchExts = ThunkDispatch<any, any, AnyAction>;

const middlewares = [thunk];
const mockStore = configureMockStore<any, DispatchExts>(middlewares);

// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe("<UserDetailTable />", () => {
  const props: any = {
    userPosts: [
      {
        userId: 1,
        id: 1,
        title: "test",
        body: "Body",
      },
    ],
  };

  let userPostsTableTest: any;
  beforeEach(() => {
    const { findByTestId } = render(<UserDetailTable {...props} />);
    userPostsTableTest = findByTestId;
  });

  it("defines the component", () => {
    expect(userPostsTableTest).toBeDefined();
  });

  it("sesarch search table", async () => {
    expect(await userPostsTableTest("table-row")).toHaveClass(
      "MuiTableRow-root"
    );
  });
});
