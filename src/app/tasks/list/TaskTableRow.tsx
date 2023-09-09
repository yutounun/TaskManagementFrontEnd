import React, { useContext, useEffect } from "react";
import { Task } from "@/_types/task";
import Timer from "./Timer";
import Edit from "@/_common/icons/Edit";
import Link from "next/link";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { displayDate } from "@/_utils/date";

type propTypes = {
  className?: string;
  task: Task;
};

const TaskTableRow = ({ ...props }: propTypes) => {
  const router = useRouter();
  const { setSelectedTask } = useContext(ThemeContext);

  function handleEditModal() {
    setSelectedTask(props.task);
    // console.log(selectedTask);
    router.push(`/tasks/list?editModal=true`);
  }
  return (
    <div className="flex bg-white py-3 px-2 rounded-lg">
      <span className="w-[20%] font-bold">{props.task.title}</span>
      <span className="w-[10%]">{props.task.type}</span>
      <span className="w-[20%]">{displayDate(props.task.to_date)}</span>
      <span className="w-[10%]">{props.task.status}</span>
      <span className="w-[10%]">{props.task.priority}</span>
      <div className="w-[20%]">
        <Timer />
        {/* <span>{props.task.manHour}</span> */}
      </div>
      <div className="w-[10%]">
        <Edit color="#333333" onClick={handleEditModal} />
      </div>
    </div>
  );
};

export default TaskTableRow;
