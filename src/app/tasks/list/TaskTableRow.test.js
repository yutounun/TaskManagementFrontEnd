import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskTableRow from "./TaskTableRow";

const mockedUseRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue("/some-route"),
}));

const MockGetTasksResponse = [
  {
    id: "1",
    title: "Task1",
    status: "Not Started",
    man_hour_min: 10,
    from_date: new Date().toISOString(),
    to_date: new Date().toISOString(),
    priority: "urgent",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    type: "mtg",
  },
];

function renderingTest(text) {
  expect(screen.getByText(text)).toBeInTheDocument();
}

describe("Task Row", () => {
  beforeEach(() => {
    render(
      <TaskTableRow
        onClickRemove={() => {}}
        updateRow={() => {}}
        task={MockGetTasksResponse[0]}
      />
    );
  });
  test("renders task details row correctly", () => {
    renderingTest(/task1/i);
    renderingTest(/not started/i);
    renderingTest(/urgent/i);
    renderingTest(/mtg/i);
  });
});
