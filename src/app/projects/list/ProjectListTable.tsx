import React, { useEffect, useState } from "react";
import { GetProjectResponse, GetTaskByIdResponse } from "@/_types/taskList";
import Loading from "../loading";
import ProjectListTableHeader from "./ProjectListTableHeader";
import ProjectListTableRow from "./ProjectListTableRow";

type propTypes = {
  projects: GetProjectResponse[];
  isLoading: boolean;
  onClickRemove: (id: string) => void;
  getProjects?: () => void;
};

const ProjectListTable = ({
  projects = [],
  isLoading,
  onClickRemove,
  getProjects,
}: propTypes) => {
  return (
    <>
      {isLoading && <Loading />}
      <div className="mx-3 mt-80 ml-[550px]">
        {/* No task added */}
        {!isLoading && projects?.length === 0 ? (
          <h3>Unfortunately no project founded. Please add a new project.</h3>
        ) : (
          <ProjectListTableHeader />
        )}
        {/* Project List */}
        {projects.map((project) => (
          <div className="flex flex-col gap-4" key={project.id}>
            <ProjectListTableRow
              project={project}
              onClickRemove={onClickRemove}
              getProjects={getProjects}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectListTable;
