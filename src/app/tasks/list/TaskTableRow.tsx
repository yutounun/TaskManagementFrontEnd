import React from "react";
import { GetTask } from "@/tasks/list/task";
import Timer from "./Timer";
import Edit from "@/common/icons/Edit";

type propTypes = {
  className?: string;
  task: GetTask;
};

const TaskTableRow = ({ ...props }: propTypes) => {
  return (
    <div className="flex bg-white py-3 px-2 rounded-lg">
      <span className="w-[20%] font-bold">{props.task.title}</span>
      <span className="w-[10%]">{props.task.type}</span>
      <span className="w-[20%]">{props.task.to}</span>
      <span className="w-[10%]">{props.task.status}</span>
      <span className="w-[10%]">{props.task.priority}</span>
      <div className="w-[20%]">
        <Timer />
        {/* <span>{props.task.manHour}</span> */}
      </div>
      <span className="w-[10%]">
        <Edit color="#333333" />
      </span>
    </div>
  );
};

export default TaskTableRow;
