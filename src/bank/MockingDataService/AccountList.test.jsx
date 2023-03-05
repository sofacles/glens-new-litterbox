import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountList } from "./AccountList";
import Data from "../DataService/Data";
import SoundPlayer from "./sound-player";

jest.mock("./sound-player");
const mockgetAccountAt = jest.fn();
jest.mock("../DataService/Data");

Data.mockImplementation(() => {
  return { getAccountAt: (idex) => `mocked getAccountAt-${idex}` };
});

describe("AccountList", () => {
  beforeAll(() => {
    SoundPlayer.mockImplementation(() => {
      return {
        playSoundFile: () => {
          return "mockery";
        },
      };
    });

    render(<AccountList />);
  });
  test("renders home page", () => {
    screen.debug();
    const acctList = screen.getByTestId("account-list");
    expect(acctList).toHaveTextContent("mocked getAccountAt-1");
    const heading = screen.getByTestId("h1-1");
    expect(heading).toHaveTextContent("mockery");
  });
});
