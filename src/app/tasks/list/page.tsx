"use client";
import Modal from "@/_common/Modal";
import Title from "@/_common/Title";
import TaskTable from "./TaskTable";
import TaskAddModal from "./TaskAddModal";
import { deleteApi, getApi } from "@/_utils/api";
import { useEffect, useState } from "react";
import { GetProjectResponse } from "@/_types/taskList";
import { useSearchParams } from "next/navigation";
import TaskEditModal from "./TaskEditModal";

type propTypes = {
  searchParams?: Record<string, string> | null | undefined;
};

export default function Tasks({ searchParams }: propTypes) {
  // const [openEditModal, setOpenEditModal] = useState(false);
  const showEditModal = searchParams?.editModal;
  const showAddModal = searchParams?.addModal;
  const showFilterModal = searchParams?.filterModal;
  const [projects, setProjects] = useState([]);
  const searchPathParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Get all projects when the page loads
   */
  async function getProjects(params?: Object) {
    setIsLoading(true);
    const res: GetProjectResponse[] = await getApi("projects", params);
    setProjects(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getProjects();
    console.log("projects");
  }, [searchPathParams]);

  function handleSearch() {
    const params = {
      title: searchKeyword,
    };
    getProjects(params);
  }

  function onClickRemove(taskId) {
    deleteProject(taskId);
  }

  async function deleteProject(taskId) {
    setIsLoading(true);
    await deleteApi(`tasks/${taskId}`);
    await getProjects();
    setIsLoading(false);
  }

  return (
    <>
      {!showEditModal && !showAddModal && !showFilterModal && (
        <>
          <Title
            handleSearch={handleSearch}
            title="Tasks"
            newBtn
            page="tasks"
            setSearchKeyword={setSearchKeyword}
          />
          <TaskTable
            onClickRemove={onClickRemove}
            isLoading={isLoading}
            projects={projects}
          />
        </>
      )}
      {showEditModal && (
        <div className="flex justify-center items-center h-screen">
          <TaskEditModal title="Edit Task" projects={projects} />
        </div>
      )}
      {showAddModal && (
        <div className="flex justify-center items-center h-screen">
          <TaskAddModal title="Add Task" projects={projects} />
        </div>
      )}
      {showFilterModal && (
        <div className="flex justify-center items-center h-screen">
          <Modal title="Filter" page="tasks" type="filter" />
        </div>
      )}
    </>
  );
}
