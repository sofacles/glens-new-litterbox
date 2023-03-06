import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountList } from "./MockingClassMethod";
import Data from "../DataService/Data";

const mockgetAccountAt = jest.fn();
jest.mock("../DataService/Data");

describe("AccountList", () => {
  beforeEach(() => {
    Data.mockImplementation(() => {
      return { getAccountAt: (idex) => `mocked getAccountAt-${idex}` };
    });
    render(<AccountList />);
  });

  test("renders home page", () => {
    //screen.debug();
    debugger;
    const acctList = screen.getByTestId("account-list");
    expect(acctList).toHaveTextContent("mocked getAccountAt-1");
  });
});
