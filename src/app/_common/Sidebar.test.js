import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar";

function runSidebarTest(title, type) {
  test(title, async () => {
    render(<Sidebar active={type} />);
    const taskLink = screen.getByRole("link", {
      name: "Tasks",
    });
    const projectLink = screen.getByRole("link", {
      name: "Projects",
    });

    if (type === "tasks") {
      expect(taskLink).toHaveClass("text-white");
      expect(projectLink).not.toHaveClass("text-white");
    }

    if (type === "projects") {
      expect(taskLink).not.toHaveClass("text-white");
      expect(projectLink).toHaveClass("text-white");
    }
  });
}

describe("Tabs", () => {
  runSidebarTest("click tabs and check the focused tab", "tasks");

  runSidebarTest("find Projects link active on projects page", "projects");
});
