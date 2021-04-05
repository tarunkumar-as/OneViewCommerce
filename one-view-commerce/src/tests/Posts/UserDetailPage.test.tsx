import React from "react";
import { render } from "@testing-library/react";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { AnyAction } from "redux";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import "isomorphic-fetch";
import Button from "@material-ui/core/Button";

import UserDetailPage from "../../components/posts/UserDetailPage";

type DispatchExts = ThunkDispatch<any, any, AnyAction>;

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore<any, DispatchExts>(middlewares);

// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe("<UserDetailPage />", () => {
  const props: any = {
    handleSubmit: jest.fn(),
  };

  let detailPageTest: any;
  const match = {
    match: {
      params: { id: 0 },
    },
  };
  beforeEach(() => {
    const { findByTestId } = render(
      <Provider store={mockStore({ userPostReducer: { userPosts: [] } })}>
        <UserDetailPage {...match} />
      </Provider>
    );
    detailPageTest = findByTestId;
  });

  it("defines the component", () => {
    expect(detailPageTest).toBeDefined();
  });

  it("defines search table", async () => {
    expect(await detailPageTest("posts-table")).toBeInTheDocument();
  });
});

describe("Test Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const button = mount(<Button onClick={mockCallBack}>Test</Button>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
