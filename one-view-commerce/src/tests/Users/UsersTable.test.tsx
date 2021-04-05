import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { AnyAction } from "redux";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import "isomorphic-fetch";

import UsersTable from "../../components/users/UsersTable";

type DispatchExts = ThunkDispatch<any, any, AnyAction>;

const middlewares = [thunk];
const mockStore = configureMockStore<any, DispatchExts>(middlewares);

// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe("<UsersTable />", () => {
  const props: any = {
    users: [
      {
        id: 1,
        name: "SampleName",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
    ],
    searchText: "",
  };

  let usersTableTest: any;
  beforeEach(() => {
    const { findByTestId } = render(<UsersTable {...props} />);
    usersTableTest = findByTestId;
  });

  it("defines the component", () => {
    expect(usersTableTest).toBeDefined();
  });

  it("sesarch search table", async () => {
    expect(await usersTableTest("table-row")).toHaveClass("MuiTableRow-root");
  });
});
