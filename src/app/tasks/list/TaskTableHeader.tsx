import React from "react";

const TaskTableHeader = () => {
  return (
    <div className="flex px-2 py-1 mb-5">
      <span className="w-[20%] text-xl text-gray-text ">Task</span>
      {/* <span className="w-[10%] text-xl text-gray-text">Type</span> */}
      <span className="w-[15%] text-xl text-gray-text">DeadLine</span>
      <span className="w-[15%] text-xl text-gray-text">Status</span>
      <span className="w-[15%] text-xl text-gray-text">Priority</span>
      <span className="w-[20%] text-xl text-gray-text">ManHour</span>
      <span className="w-[5%] text-xl"></span>
    </div>
  );
};

export default TaskTableHeader;
