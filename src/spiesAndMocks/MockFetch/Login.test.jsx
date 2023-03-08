import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Login } from "./Login";

describe("when you log in and get a best friend", () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                gender: "male",
                name: {
                  first: "Dave",
                },
              },
            ],
          }),
      });
    });

    render(<Login userName="Brenda" isLoggedIn={false} />);
  });

  afterEach(async () => jest.clearAllMocks());
  test("renders the userName", () => {
    expect(screen.getByText("Brenda")).toBeInTheDocument();
  });

  it("shows Dave is her best friend", async () => {
    await userEvent.click(screen.getByTestId("login-button"));
    const bestFriendLabel = screen.getByTestId("best-friend");
    await expect(bestFriendLabel.textContent).toMatch(/Dave/);
  });
});
