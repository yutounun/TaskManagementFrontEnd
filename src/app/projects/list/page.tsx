"use client";

import Title from "@/_common/Title";
import { getProjectParams } from "@/_types/projectList";
import { GetProjectResponse } from "@/_types/taskList";
import { deleteApi, getApi } from "@/_utils/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectAddModal from "./ProjectAddModal";
import ProjectEditModal from "./ProjectEditModal";
import ProjectListTable from "./ProjectListTable";

type propTypes = {
  searchParams?: Record<string, string> | null | undefined;
};

export default function Projects({ searchParams }: propTypes) {
  const searchPathParams = useSearchParams();
  const showEditModal = searchPathParams?.get("editModal");
  const showAddModal = searchPathParams?.get("addModal");
  const showFilterModal = searchPathParams?.get("filterModal");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");

  function handleSearch() {
    const params = {
      title: searchKeyword,
    };
    getProjects(params);
  }

  async function getProjects(params?: any) {
    setIsLoading(true);
    const res: any = await getApi("projects", params);
    setProjects(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, []);

  function onClickRemove(projectId) {
    deleteProject(projectId);
  }

  async function deleteProject(projectId) {
    setIsLoading(true);
    await deleteApi(`projects/${projectId}`);
    await getProjects();
    setIsLoading(false);
  }

  return (
    <>
      <div>
        <Title
          handleSearch={handleSearch}
          title="Projects"
          newBtn
          page="projects"
          setSearchKeyword={setSearchKeyword}
        />
        <ProjectListTable
          onClickRemove={onClickRemove}
          isLoading={isLoading}
          projects={projects}
        />
      </div>
      {showEditModal && (
        <div className="flex justify-center items-center h-screen">
          <ProjectEditModal title="Edit Task" projects={projects} />
        </div>
      )}
      {showAddModal && (
        <div className="flex justify-center items-center h-screen">
          <ProjectAddModal title="Add Task" projects={projects} />
        </div>
      )}
      {/* {showFilterModal && (
        <div className="flex justify-center items-center h-screen">
          <Modal title="Filter" page="tasks" type="filter" />
        </div>
      )} */}
    </>
  );
}
