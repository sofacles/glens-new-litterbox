import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountList } from "./AccountList";
import Data from "../DataService/Data";
import SoundPlayer from "./sound-player";

jest.mock("./sound-player");

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
    //screen.debug();
    const acctList = screen.getByTestId("account-list");
    expect(acctList).toHaveTextContent("mockery");
  });
});
