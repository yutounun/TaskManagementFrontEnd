import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("renders continue button correctly", () => {
    render(<Button continue />);
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });
  it("renders modal button correctly", () => {
    render(<Button modal text="save"></Button>);
    expect(screen.getByText(/save/i)).toBeInTheDocument();
  });
  it("renders cancel button correctly", () => {
    render(<Button cancel />);
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });
  it("renders new button correctly", () => {
    render(<Button new />);
    expect(screen.getByText(/add new/i)).toBeInTheDocument();
  });
  it("renders normal button correctly", () => {
    render(<Button normal text="Click me"></Button>);
    expect(screen.getByText(/Click me/i)).toBeInTheDocument();
  });
});
