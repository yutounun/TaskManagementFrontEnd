"use client";
import Title from "@/_common/Title";
import TaskTable from "./TaskTable";
import TaskAddModal from "./TaskAddModal";
import { deleteApi, getApi, putApi } from "@/_utils/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TaskEditModal from "./TaskEditModal";

type propTypes = {
  searchParams?: Record<string, string> | null | undefined;
};

export default function Tasks({ searchParams }: propTypes) {
  const searchPathParams = useSearchParams();
  const showEditModal = searchPathParams?.get("editModal");
  const showFilterModal = searchPathParams?.get("filterModal");
  const [projects, setProjects] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Get all projects when the page loads
   */
  async function getProjects(params?: any) {
    setIsLoading(true);
    const res: any = await getApi("projects/tasks", params);
    setProjects(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, []);

  function handleSearch() {
    const params = {
      title: searchKeyword,
    };
    getProjects(params);
  }

  function onClickRemove(taskId) {
    deleteTask(taskId);
  }

  async function deleteTask(taskId) {
    setIsLoading(true);
    await deleteApi(`tasks/${taskId}`);
    await getProjects();
    setIsLoading(false);
  }

  /**
   * Call updateTaskById only when save button is clicked
   */
  async function updateManHourMin() {
    setIsLoading(true);
    projects.forEach(async (project) => {
      project.tasks.forEach((task) => {
        putApi(`tasks/${task.id}`, task)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
    });
  }

  /**
   * Updates the row every minute
   * @param updatedRow
   */
  function updateRow(updatedRow) {
    const updatedProjects = projects.map((project) => {
      return {
        ...project,
        tasks: project.tasks.map((task) =>
          task.id === updatedRow.id ? updatedRow : task
        ),
      };
    });
    setProjects(updatedProjects);
  }

  return (
    <>
      <div>
        <Title
          handleSearch={handleSearch}
          title="Tasks"
          newBtn
          page="tasks"
          setSearchKeyword={setSearchKeyword}
          updateManHourMin={updateManHourMin}
          projects={projects}
          getProjects={getProjects}
        />
        <TaskTable
          onClickRemove={onClickRemove}
          isLoading={isLoading}
          projects={projects}
          updateRow={updateRow}
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
