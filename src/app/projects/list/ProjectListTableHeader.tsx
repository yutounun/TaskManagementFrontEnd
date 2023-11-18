import React from "react";

const ProjectListTableHeader = () => {
  return (
    <div className="flex py-1 mb-5">
      <span className="w-[20%] text-xl text-gray-text">Project</span>
      <span className="w-[20%] text-xl text-gray-text">DeadLine</span>
      <span className="w-[20%] text-xl text-gray-text">Status</span>
      <span className="w-[15%] text-xl text-gray-text">ManHour</span>
      <span className="w-[5%] text-xl text-gray-text"></span>
    </div>
  );
};

export default ProjectListTableHeader;
