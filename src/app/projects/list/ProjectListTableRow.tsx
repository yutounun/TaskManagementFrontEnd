import React, { useContext } from "react";
import { GetProjectResponse } from "@/_types/taskList";
import Edit from "@/_common/icons/Edit";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { displayDate } from "@/_utils/date";
import Bin from "@/_common/icons/Bin";

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
      return "bg-gray-500";
    } else if (project.status === "In Progress") {
      return "bg-yellow-500";
    } else if (project.status === "Completed") {
      return "bg-green-500";
    } else if (project.status === "On Hold") {
      return "bg-red-500";
    } else if (project.status === "Under Review") {
      return "bg-gray-500";
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
    <div className="flex bg-white py-3 px-2 rounded-lg">
      <span className="w-[30%] font-bold">{project.title}</span>
      <span className="w-[20%]">{displayDate(project.to_date)}</span>
      <div className="w-[20%]">
        <span className={`badge w-[80%] h-[100%] text-white ${statusClass()}`}>
          {project.status}
        </span>
      </div>
      <div className="w-[20%]">{totalManHour()}</div>
      <div className="w-[5%] flex gap-2">
        <Edit color="#333333" onClick={handleEditModal} />
        <Bin onClick={() => onClickRemove(project.id)} />
      </div>
    </div>
  );
};

export default ProjectListTableRow;
