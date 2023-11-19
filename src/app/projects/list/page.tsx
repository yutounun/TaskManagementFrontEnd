"use client";

import Title from "@/_common/Title";
import { deleteApi, getApi } from "@/_utils/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectListTable from "./ProjectListTable";

export default function Projects() {
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
          getProjects={getProjects}
          projects={projects}
        />
        <ProjectListTable
          onClickRemove={onClickRemove}
          isLoading={isLoading}
          projects={projects}
          getProjects={getProjects}
        />
      </div>
      {/* {showFilterModal && (
        <div className="flex justify-center items-center h-screen">
          <Modal title="Filter" page="tasks" type="filter" />
        </div>
      )} */}
    </>
  );
}
