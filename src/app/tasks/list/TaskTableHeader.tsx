import React from "react";

const TaskTableHeader = () => {
  return (
    <div className="flex px-2 py-1 mb-5">
      <span className="w-[20%] text-xl font-bold">Task</span>
      <span className="w-[10%] text-xl">Type</span>
      <span className="w-[15%] text-xl">DeadLine</span>
      <span className="w-[15%] text-xl">Status</span>
      <span className="w-[15%] text-xl">Priority</span>
      <span className="w-[20%] text-xl">ManHour</span>
      <span className="w-[5%] text-xl"></span>
    </div>
  );
};

export default TaskTableHeader;
