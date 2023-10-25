import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import BoldInput from "./BoldInput";

function renderBoldInput(props) {
  const defaultProps = {
    error: "",
    register: () => {},
  };

  render(<BoldInput {...defaultProps} {...props} />);
}

function runInputTest({ title, label, placeholder, inputValue, roleMatch }) {
  test(`should type in ${title} Input correctly`, async () => {
    renderBoldInput({ title, label, placeholder });

    const inputElement = roleMatch
      ? screen.getByRole("textbox", roleMatch)
      : screen.getByPlaceholderText(new RegExp(placeholder, "i"));

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");

    userEvent.type(inputElement, inputValue);

    await waitFor(() => {
      expect(inputElement.value).toBe(inputValue);
      expect(screen.getByTitle("check")).toBeInTheDocument();
    });
  });
}

describe("BoldInput", () => {
  runInputTest({
    title: "SignUp Email",
    label: "signup email",
    inputValue: "test@gmail.com",
    roleMatch: "/signup email/i",
  });

  runInputTest({
    title: "SignUp Password",
    label: "signup password",
    placeholder: "Enter Your Password",
    inputValue: "Password123",
  });

  runInputTest({
    title: "SignUp Username",
    label: "signup username",
    placeholder: "Enter Your Username",
    inputValue: "testUser1",
  });

  runInputTest({
    title: "SignIn Username",
    label: "signin username",
    placeholder: "Enter Your Username",
    inputValue: "testUser2",
  });

  runInputTest({
    title: "SignIn Password",
    label: "signin password",
    placeholder: "Enter Your Password",
    inputValue: "Password1234",
  });
});
