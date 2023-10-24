import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("renders continue button correctly", () => {
    render(<Button continue />);
    expect(
      screen.getByRole("button", { name: /continue/i })
    ).toBeInTheDocument();
  });
  it("renders modal button correctly", () => {
    render(<Button modal text="save"></Button>);
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });
  it("renders cancel button correctly", () => {
    render(<Button cancel />);
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });
  it("renders new button correctly", () => {
    render(<Button new />);
    expect(
      screen.getByRole("button", { name: /add new/i })
    ).toBeInTheDocument();
  });
  it("renders normal button correctly", () => {
    render(<Button normal text="Click me"></Button>);
    expect(
      screen.getByRole("button", { name: /Click me/i })
    ).toBeInTheDocument();
  });
});
