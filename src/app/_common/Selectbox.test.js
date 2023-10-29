import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectBox from "./SelectBox";
import { userEvent } from "@testing-library/user-event";

import { MockGetProjectResponse } from "@/_types/taskList";

/**
 * Runs a test on a select box.
 *
 * @param {string} title - The title of the option to select.
 * @return {Promise<void>} - A promise that resolves when the test is complete.
 */

describe("status selectbox", () => {
  test("can select each option from selectbox ", async () => {
    const options = [
      { value: "Not Started", label: "Not Started" },
      { value: "In Progress", label: "In Progress" },
      { value: "On Hold", label: "On Hold" },
      { value: "Under Review", label: "Under Review" },
      { value: "Completed", label: "Completed" },
    ];
    render(
      <SelectBox
        title="status"
        label="status"
        options={options}
        register={() => {}}
      />
    );
    const status = screen.getByLabelText(/status/i);
    expect(status.value).toBe("Not Started");

    const titles = [
      "Not Started",
      "In Progress",
      "Completed",
      "Under Review",
      "On Hold",
      "Under Review",
    ];

    for (const title of titles) {
      userEvent.selectOptions(status, title);
      await waitFor(() => {
        expect(status.value).toBe(title);
      });
    }
  });
});

describe("priority selectbox", () => {
  test("can select each option from selectbox ", async () => {
    const options = [
      { label: "critical", value: "critical" },
      { label: "urgent", value: "urgent" },
      { label: "normal", value: "normal" },
      { label: "optional", value: "optional" },
    ];
    render(
      <SelectBox
        title="priority"
        label="priority"
        options={options}
        register={() => {}}
      />
    );
    const priority = screen.getByLabelText(/priority/i);
    expect(priority.value).toBe("critical");

    const titles = ["urgent", "normal", "optional", "critical"];
    for (const title of titles) {
      userEvent.selectOptions(priority, title);
      await waitFor(() => {
        expect(priority.value).toBe(title);
      });
    }
  });
});

describe("projects selectbox", () => {
  test("can select each option from selectbox ", async () => {
    render(
      <SelectBox
        title="projects"
        label="projects"
        projects={MockGetProjectResponse}
        register={() => {}}
      />
    );

    const status = screen.getByLabelText("projects");
    expect(status.value).toBe("1");

    const titles = MockGetProjectResponse.map((res) => res.id);

    for (const title of titles) {
      userEvent.selectOptions(status, title);
      await waitFor(() => {
        expect(status.value).toBe(title);
      });
    }
  });
});
