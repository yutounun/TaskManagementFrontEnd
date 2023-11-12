import { screen, render, waitFor, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskAddModal from "./TaskAddModal";
import InputField from "../../_common/InputField";
import { userEvent } from "@testing-library/user-event";

export const MockGetProjectResponse = [
  {
    id: "1",
    title: "Project1",
    status: "Not Started",
    total_man_hour_min: "0",
    from_date: new Date(),
    to_date: new Date(),
    priority: "critical",
    created_at: "",
    updated_at: "",
    type: "",
    tasks: [
      {
        id: "1",
        title: "Task 1",
        status: "Not Started",
        man_hour_min: 0,
        from_date: new Date(),
        to_date: new Date(),
        priority: "critical",
      },
    ],
  },
  {
    id: "2",
    title: "Project2",
    status: "Not Started",
    total_man_hour_min: "0",
    from_date: new Date(),
    to_date: new Date(),
    priority: "critical",
    created_at: "",
    updated_at: "",
    type: "",
    tasks: [
      {
        id: "1",
        title: "Task 1",
        status: "Not Started",
        man_hour_min: 0,
        from_date: new Date(),
        to_date: new Date(),
        priority: "critical",
      },
    ],
  },
];

const mockedUseRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue("/some-route"),
}));

function renderingTest(text) {
  expect(screen.getByText(text)).toBeInTheDocument();
}

function runInputTest({ title, label, placeholder, inputValue, type }) {
  test(`should type in ${title} Input correctly`, async () => {
    renderInputField({ title, label, placeholder, type });

    const inputElement =
      type === "time"
        ? screen.getByLabelText(label)
        : screen.getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");

    userEvent.type(inputElement, inputValue);

    await waitFor(() => {
      expect(inputElement.value).toBe(inputValue);
    });
  });
}

function renderInputField(props) {
  const defaultProps = {
    error: "",
    register: () => {},
  };

  render(<InputField {...defaultProps} {...props} />);
}

describe("Task Row", () => {
  beforeEach(() => {
    render(<TaskAddModal projects={MockGetProjectResponse} title="Add Task" />);
  });
  test("renders each columns row correctly", () => {
    renderingTest(/add task/i);
  });
  test("shows validation errors on clicking submit button without typing into any columns", async () => {
    const submitBtn = screen.getByRole("button", { name: /add/i });
    expect(submitBtn).toBeDisabled();
  });

  test("does not show validation errors on clicking submit button with typing into all columns", async () => {
    const titleInput = screen.getByRole("textbox", {
      name: /title\*/i,
    });
    const typeInput = screen.getByRole("textbox", {
      name: /type\*/i,
    });
    const submitBtn = screen.getByRole("button", { name: "Add" });

    userEvent.type(titleInput, "title1");
    userEvent.type(typeInput, "type1");

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.queryByText("Please type title")).not.toBeInTheDocument();
      expect(screen.queryByText("Please type type")).not.toBeInTheDocument();
    });
  });
});
