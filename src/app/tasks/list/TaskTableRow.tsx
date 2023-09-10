import React, { useContext, useEffect } from "react";
import { GetTaskByIdResponse } from "@/_types/taskList";
import Timer from "./Timer";
import Edit from "@/_common/icons/Edit";
import Link from "next/link";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { displayDate } from "@/_utils/date";
import Bin from "@/_common/icons/Bin";

type propTypes = {
  className?: string;
  task: GetTaskByIdResponse;
  onClickRemove: (id: string) => void;
};

const TaskTableRow = ({ ...props }: propTypes) => {
  const router = useRouter();
  const { setSelectedTask } = useContext(ThemeContext);

  function handleEditModal() {
    setSelectedTask(props.task);
    router.push(`/tasks/list?editModal=true`);
  }

  /**
   * Returns the CSS class name for the priority of a task.
   *
   * @return {string} The CSS class name for the priority.
   */
  function priorityClass() {
    if (props.task.priority === "critical") {
      return "bg-red-500";
    } else if (props.task.priority === "urgent") {
      return "bg-yellow-500";
    } else if (props.task.priority === "normal") {
      return "bg-green-500";
    } else if (props.task.priority === "optional") {
      return "bg-gray-500";
    }
  }

  /**
   * Returns the CSS class name for the status of a task.
   *
   * @return {string} The CSS class name for the priority.
   */
  function statusClass() {
    if (props.task.status === "Not Started") {
      return "bg-gray-500";
    } else if (props.task.status === "In Progress") {
      return "bg-yellow-500";
    } else if (props.task.status === "Completed") {
      return "bg-green-500";
    } else if (props.task.status === "On Hold") {
      return "bg-red-500";
    } else if (props.task.status === "Under Review") {
      return "bg-gray-500";
    }
  }

  return (
    <div className="flex bg-white py-3 px-2 rounded-lg">
      <span className="w-[20%] font-bold">{props.task.title}</span>
      <span className="w-[10%]">{props.task.type}</span>
      <span className="w-[15%]">{displayDate(props.task.to_date)}</span>
      <div className="w-[15%]">
        <span className={`badge w-[80%] h-[100%] text-white ${statusClass()}`}>
          {props.task.status}
        </span>
      </div>
      <div className="w-[15%]">
        <span
          className={`badge w-[80%] h-[100%] text-white ${priorityClass()}`}
        >
          {props.task.priority}
        </span>
      </div>
      <div className="w-[20%]">
        <Timer />
        {/* <span>{props.task.manHour}</span> */}
      </div>
      <div className="w-[5%] flex gap-2">
        <Edit color="#333333" onClick={handleEditModal} />
        <Bin onClick={() => props.onClickRemove(props.task.id)} />
      </div>
    </div>
  );
};

export default TaskTableRow;
