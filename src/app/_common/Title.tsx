import ProjectAddModal from "@/projects/list/ProjectAddModal";
import TaskAddModal from "@/tasks/list/TaskAddModal";
import React, { useState } from "react";
import Button from "./Button";
import Filter from "./icons/Filter";
import Search from "./icons/Search";
import InputField from "./InputField";
import Tooltip from "./Tooltip";

interface propTypes {
  title: string;
  newBtn?: boolean;
  page?: string;
  projects?: any;
  handleSearch?: () => void;
  setSearchKeyword?: (value: string) => void;
  updateManHourMin?: () => void;
  getProjects?: () => void;
}
const Title = ({ ...props }: propTypes) => {
  const [openTaskAddModal, setOpenTaskAddModal] = useState(false);
  const [openProjectAddModal, setOpenProjectAddModal] = useState(false);
  /**
   * Handles the save click event to save the timer
   *
   * @param {none} - No parameters.
   * @return {void} - No return value.
   */
  function handleSaveClick() {
    props.updateManHourMin();
  }

  function handleModal() {
    if (props.page === "tasks") {
      setOpenTaskAddModal(true);
    } else {
      setOpenProjectAddModal(true);
    }
  }

  function addButtonTooltip() {
    if (props.page === "tasks") {
      return "Add New Task";
    } else {
      return "Add New Project";
    }
  }
  return (
    <div className="flex items-center gap-4 mt-10 ml-24">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mr-8">{props.title} Board</h1>

      {/* Search Window */}
      <InputField
        onChange={(e) => props.setSearchKeyword(e.target.value)}
        placeholder="Enter Title"
        type="text"
      />

      {/* Search Run Button */}
      <Tooltip dataTip="Filter tasks by task title">
        <Search color="#333333" onClick={props.handleSearch} />
      </Tooltip>

      {/* Filter Icon that opens filter modal */}
      {/* <Link href={`/${props.page}/list?filterModal=true`}>
        <Filter color="#333333" />
      </Link> */}

      {/* Add New Task Button that opens add modal */}
      {props.newBtn && (
        <div className="ml-8 mt-2">
          <Tooltip dataTip={addButtonTooltip()}>
            <Button onClick={handleModal} new />
          </Tooltip>
        </div>
      )}

      {/* Save Timer Button */}
      {props.page === "tasks" && (
        <Tooltip onClick={handleSaveClick} dataTip="Save man-hour tracking">
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1667 0H5.66667L0 5.66667V19.8333C0 21.3961 1.27057 22.6667 2.83333 22.6667H14.1667C15.7294 22.6667 17 21.3961 17 19.8333V2.83333C17 1.27057 15.7294 0 14.1667 0ZM7.08333 7.08333H4.95833V2.83333H7.08333V7.08333ZM10.625 7.08333H8.5V2.83333H10.625V7.08333ZM14.1667 7.08333H12.0417V2.83333H14.1667V7.08333Z"
              fill="black"
            />
          </svg>
        </Tooltip>
      )}

      {/* Task Add Modal */}
      {openTaskAddModal && (
        <div className="flex justify-center items-center h-screen">
          <TaskAddModal
            onClose={() => setOpenTaskAddModal(false)}
            title="Add Task"
            projects={props.projects}
            getProjects={props.getProjects}
          />
        </div>
      )}

      {/* Project Add Modal */}
      {openProjectAddModal && (
        <div className="flex justify-center items-center h-screen">
          <ProjectAddModal
            onClose={() => setOpenProjectAddModal(false)}
            title="Add Task"
            projects={props.projects}
            getProjects={props.getProjects}
          />
        </div>
      )}
    </div>
  );
};

export default Title;
