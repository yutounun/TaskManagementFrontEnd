import React, { useContext, useEffect, useState } from "react";
import { GetTaskByIdResponse } from "@/_types/taskList";
import Timer from "./Timer";
import Edit from "@/_common/icons/Edit";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { displayDate } from "@/_utils/date";
import Bin from "@/_common/icons/Bin";
import Badge from "@/_common/Badge";

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
      project_id: task.project_id,
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
      return "bg-[#29C769]";
    } else if (task.priority === "urgent") {
      return "bg-[#FF7E8D]";
    } else if (task.priority === "normal") {
      return "bg-[#21C7E8]";
    } else if (task.priority === "optional") {
      return "bg-[#FFBC1F]";
    }
  }

  /**
   * Returns the CSS class name for the status of a task.
   *
   * @return {string} The CSS class name for the priority.
   */
  function statusClass() {
    if (task.status === "Not Started") {
      return "bg-[#FFBC1F]";
    } else if (task.status === "In Progress") {
      return "bg-[#21C7E8]";
    } else if (task.status === "Completed") {
      return "bg-[#FF7E8D]";
    } else if (task.status === "On Hold") {
      return "bg-[#29C769]";
    } else if (task.status === "Under Review") {
      return "bg-[#6A5ACD]";
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
    <div className="flex bg-white h-8 px-2 rounded-lg">
      <span className="flex items-center w-[20%] text-gray-stronger font-bold">
        {task.title}
      </span>
      {/* <span className="flex items-center w-[10%]">{task.type}</span> */}
      <span className="flex items-center w-[15%] text-gray-on-gray">
        {displayDate(task.to_date)}
      </span>
      <div className="flex items-center w-[15%]">
        <Badge bgColor={statusClass()}>{task.status}</Badge>
      </div>
      <div className="flex items-center w-[15%]">
        <Badge bgColor={priorityClass()}>{task.status}</Badge>
      </div>
      <div className="flex items-center w-[20%]">
        <Timer initialMinutes={task.man_hour_min} setManHourMin={counter} />
      </div>
      <div className="flex items-center w-[5%] gap-2">
        <Edit color="#333333" onClick={handleEditModal} />
        <Bin data-testid="delete-btn" onClick={() => onClickRemove(task.id)} />
      </div>
    </div>
  );
};

export default TaskTableRow;
