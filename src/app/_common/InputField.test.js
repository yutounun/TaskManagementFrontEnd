import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";

function renderInputField(props) {
  const defaultProps = {
    error: "",
    register: () => {},
  };

  render(<InputField {...defaultProps} {...props} />);
}

function runInputTest({ title, label, placeholder, inputValue, type }) {
  test(`should type in ${title} Input correctly`, async () => {
    renderInputField({ title, label, placeholder, type });

    const inputElement =
      type === "time" || type === "date"
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

describe("InputField", () => {
  // Normal cases
  runInputTest({
    title: "Title",
    label: "Title",
    inputValue: "new project",
    type: "text",
  });

  runInputTest({
    title: "Type",
    label: "Type",
    inputValue: "mtg",
    type: "text",
  });

  // Time case
  runInputTest({
    title: "Man Hour",
    label: "Man Hour",
    type: "time",
    inputValue: "12:00",
  });

  // Date case
  runInputTest({
    title: "Man Hour",
    label: "Man Hour",
    type: "time",
    inputValue: "12:00",
  });

  runInputTest({
    title: "From Date",
    label: "From Date",
    type: "date",
    inputValue: "2023-01-01",
  });

  runInputTest({
    title: "To Date",
    label: "To Date",
    type: "date",
    inputValue: "2023-01-02",
  });

  // test(`should type in Period Input correctly`, async () => {
  //   renderInputField({
  //     title: "Period",
  //     label: "From",
  //     label2: "To",
  //     type: "fromTo",
  //   });

  //   const from = screen.getByLabelText(/from date/i);
  //   const to = screen.getByLabelText(/to date/i);

  //   expect(from).toBeInTheDocument();
  //   expect(to).toBeInTheDocument();

  //   expect(from.value).toBe("");
  //   expect(to.value).toBe("");

  //   const input1 = "2023-01-01";
  //   const input2 = "2023-01-02";

  //   fireEvent.change(from, { target: { value: input1 } });
  //   fireEvent.change(to, { target: { value: input2 } });

  //   await waitFor(() => {
  //     expect(from.value).toBe(input1);
  //     expect(to.value).toBe(input2);
  //   });
  // });
});
