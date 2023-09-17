import React, { useContext, useEffect, useState } from "react";
import { GetTaskByIdResponse } from "@/_types/taskList";
import Timer from "./Timer";
import Edit from "@/_common/icons/Edit";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { displayDate } from "@/_utils/date";
import Bin from "@/_common/icons/Bin";

type propTypes = {
  className?: string;
  task: GetTaskByIdResponse;
  onClickRemove: (id: string) => void;
  updateRow: (updatedRow) => void;
};

const TaskTableRow = ({
  className,
  task,
  onClickRemove,
  updateRow,
}: propTypes) => {
  const router = useRouter();
  const { setSelectedTask } = useContext(ThemeContext);

  const [currentManHourMin, setCurrentManHourMin] = useState(task.man_hour_min);

  function handleEditModal() {
    setSelectedTask({
      id: task.id,
      title: task.title,
      status: task.status,
      man_hour_min: task.man_hour_min,
      from_date: task.from_date,
      to_date: task.to_date,
      priority: task.priority,
      created_at: task.created_at,
      updated_at: task.updated_at,
      type: task.type,
      project_id: task.id,
      user_id: task.id,
    });
    router.push(`/tasks/list?editModal=true`);
  }

  /**
   * Returns the CSS class name for the priority of a task.
   *
   * @return {string} The CSS class name for the priority.
   */
  function priorityClass() {
    if (task.priority === "critical") {
      return "bg-red-500";
    } else if (task.priority === "urgent") {
      return "bg-yellow-500";
    } else if (task.priority === "normal") {
      return "bg-green-500";
    } else if (task.priority === "optional") {
      return "bg-gray-500";
    }
  }

  /**
   * Returns the CSS class name for the status of a task.
   *
   * @return {string} The CSS class name for the priority.
   */
  function statusClass() {
    if (task.status === "Not Started") {
      return "bg-gray-500";
    } else if (task.status === "In Progress") {
      return "bg-yellow-500";
    } else if (task.status === "Completed") {
      return "bg-green-500";
    } else if (task.status === "On Hold") {
      return "bg-red-500";
    } else if (task.status === "Under Review") {
      return "bg-gray-500";
    }
  }

  /** Updates the row every minute */
  function counter(manHourMin) {
    if (currentManHourMin !== manHourMin) {
      setCurrentManHourMin(manHourMin);
      updateRow({ ...task, man_hour_min: manHourMin });
    }
  }

  return (
    <div className="flex bg-white py-3 px-2 rounded-lg">
      <span className="w-[20%] font-bold">{task.title}</span>
      <span className="w-[10%]">{task.type}</span>
      <span className="w-[15%]">{displayDate(task.to_date)}</span>
      <div className="w-[15%]">
        <span className={`badge w-[80%] h-[100%] text-white ${statusClass()}`}>
          {task.status}
        </span>
      </div>
      <div className="w-[15%]">
        <span
          className={`badge w-[80%] h-[100%] text-white ${priorityClass()}`}
        >
          {task.priority}
        </span>
      </div>
      <div className="w-[20%]">
        <Timer initialMinutes={task.man_hour_min} setManHourMin={counter} />
      </div>
      <div className="w-[5%] flex gap-2">
        <Edit color="#333333" onClick={handleEditModal} />
        <Bin onClick={() => onClickRemove(task.id)} />
      </div>
    </div>
  );
};

export default TaskTableRow;
