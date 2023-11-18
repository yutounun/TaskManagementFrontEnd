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
      return "bg-[#FFBC1F]";
    } else if (project.status === "In Progress") {
      return "bg-[#21C7E8]";
    } else if (project.status === "Completed") {
      return "bg-[#FF7E8D]";
    } else if (project.status === "On Hold") {
      return "bg-[#29C769]";
    } else if (project.status === "Under Review") {
      return "bg-[#6A5ACD]";
    }
  }

  function totalManHour() {
    let totalMin = 0;
    project.tasks.forEach((task) => {
      console.log(task.man_hour_min, totalMin);
      totalMin += task.man_hour_min;
    });
    return `${Math.floor(totalMin / 60)}H : ${totalMin % 60} M`;
  }

  return (
    <div className="flex bg-white h-8 my-3 rounded-lg">
      <span className="w-[20%] font-bold text-gray-stronger">
        {project.title}
      </span>
      <span className="w-[20%] text-gray-on-gray">
        {displayDate(project.to_date)}
      </span>
      <div className="w-[20%]">
        <Badge bgColor={statusClass()}>{project.status}</Badge>
      </div>
      <div className="w-[15%] text-gray-on-gray">{totalManHour()}</div>
      <div className="w-[5%] flex gap-2">
        <Edit color="#333333" onClick={handleEditModal} />
        <Bin onClick={() => onClickRemove(project.id)} />
      </div>
    </div>
  );
};

export default ProjectListTableRow;
