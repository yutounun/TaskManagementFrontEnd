"use client";
import Modal from "@/_common/Modal";
import Title from "@/_common/Title";
import TaskTable from "./TaskTable";
import TaskAddModal from "./TaskAddModal";
import { getApi } from "@/_utils/api";
import { useEffect, useState } from "react";
import { GetProject } from "@/_types/task";
import { useRouter } from "next/navigation";

type propTypes = {
  searchParams?: Record<string, string> | null | undefined;
};

export default function Tasks({ searchParams }: propTypes) {
  // const [openEditModal, setOpenEditModal] = useState(false);
  const showEditModal = searchParams?.editModal;
  const showAddModal = searchParams?.addModal;
  const showFilterModal = searchParams?.filterModal;
  const [projects, setProjects] = useState([]);
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Get all projects when the page loads
   */
  async function getProjects(params?: Object) {
    setIsLoading(true);
    const res: GetProject[] = await getApi("projects", params);
    setProjects(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, [router]);

  function handleSearch() {
    const params = {
      title: searchKeyword,
    };
    getProjects(params);
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
          <TaskTable isLoading={isLoading} projects={projects} />
        </>
      )}
      {showEditModal && (
        <div className="flex justify-center items-center h-screen">
          <Modal title="Edit Task" page="tasks" type="edit" />
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
