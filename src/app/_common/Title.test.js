import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./Title";

describe("Title", () => {
  test("renders tasks board title correctly", () => {
    render(<Title title="tasks board" />);
    expect(
      screen.getByRole("heading", {
        name: /tasks board/i,
      })
    ).toBeInTheDocument();
  });
  test("renders tasks board title correctly", () => {
    render(<Title title="projects board" />);
    expect(
      screen.getByRole("heading", {
        name: /projects board/i,
      })
    ).toBeInTheDocument();
  });

  test("renders add new button correctly", () => {
    render(<Title title="tasks board" newBtn />);
    expect(screen.getByText(/add new/i)).toBeInTheDocument();
  });

  test("renders add new button correctly", () => {
    render(<Title title="tasks board" newBtn />);
    expect(screen.getByText(/add new/i)).toBeInTheDocument();
  });

  test("renders save button correctly", () => {
    render(<Title title="tasks board" page="tasks" />);
    expect(screen.getByText(/save/i)).toBeInTheDocument();
  });
});
