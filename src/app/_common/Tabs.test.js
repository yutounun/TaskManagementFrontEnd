import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Tabs from "./Tabs";

describe("Tabs", () => {
  const TabsWrapper = () => {
    const [isLeft, setIsLeft] = useState(true);
    return <Tabs left={isLeft} setLeft={setIsLeft} />;
  };

  beforeEach(() => {
    render(<TabsWrapper />);
  });

  test("click tabs and check the focused tab", async () => {
    const signInButton = screen.getByRole("button", { name: /Sign In/i });
    const signUpButton = screen.getByRole("button", { name: /Sign Up/i });

    expect(signInButton).toHaveClass("text-black bg-white");
    expect(signUpButton).not.toHaveClass("text-black bg-white");

    await userEvent.click(screen.getByRole("button", { name: /Sign Up/i }));

    expect(signInButton).not.toHaveClass("text-black bg-white");
    expect(signUpButton).toHaveClass("text-black bg-white");
  });
});
