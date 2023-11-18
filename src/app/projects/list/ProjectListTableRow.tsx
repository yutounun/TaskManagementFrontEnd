import React, { useContext } from "react";
import { GetProjectResponse } from "@/_types/taskList";
import Edit from "@/_common/icons/Edit";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { displayDate } from "@/_utils/date";
import Bin from "@/_common/icons/Bin";
import Badge from "@/_common/Badge";

type propTypes = {
  className?: string;
  project: GetProjectResponse;
  onClickRemove: (id: string) => void;
};

const ProjectListTableRow = ({
  className,
  project,
  onClickRemove,
}: propTypes) => {
  const router = useRouter();
  const { setSelectedProject } = useContext(ThemeContext);

  function handleEditModal() {
    setSelectedProject({
      id: project.id,
      title: project.title,
      status: project.status,
      from_date: project.from_date,
      to_date: project.to_date,
    });
    router.push(`/projects/list?editModal=true`);
  }

  /**
   * Returns the CSS class name for the status of a project.
   *
   * @return {string} The CSS class name for the priority.
   */
  function statusClass() {
    if (project.status === "Not Started") {
      return "bg-[#B0B0B0]";
    } else if (project.status === "In Progress") {
      return "bg-[#4B9CD3]";
    } else if (project.status === "Completed") {
      return "bg-[#4CAF50]";
    } else if (project.status === "On Hold") {
      return "bg-[#9C27B0]";
    } else if (project.status === "Under Review") {
      return "bg-[#F9D835]";
    }
  }

  function totalManHour() {
    let totalMin = 0;
    project.tasks.forEach((task) => {
      totalMin += task.man_hour_min;
    });
    const days = Math.floor(totalMin / 60 / 24);
    const hours = Math.floor((totalMin / 60) % 24);
    const min = Math.floor(totalMin % 60);
    return `${days}Days : ${hours}H : ${min} M`;
  }

  return (
    <div className="flex bg-white h-8 my-3 rounded-lg ml-24">
      <span className="flex items-center w-[20%] font-bold text-gray-stronger">
        {project.title}
      </span>
      <span className="flex items-center w-[20%] text-gray-on-gray">
        {displayDate(project.to_date)}
      </span>
      <div className="flex items-center w-[20%]">
        <Badge className="w-[60%]" bgColor={statusClass()}>
          {project.status}
        </Badge>
      </div>
      <div className="flex items-center w-[15%] text-gray-on-gray">
        {totalManHour()}
      </div>
      <div className="flex items-center w-[5%] gap-2">
        <Edit color="#333333" onClick={handleEditModal} />
        <Bin onClick={() => onClickRemove(project.id)} />
      </div>
    </div>
  );
};

export default ProjectListTableRow;
