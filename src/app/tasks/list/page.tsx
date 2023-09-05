import Modal from "@/_common/Modal";
import Title from "@/_common/Title";
import TaskTable from "./TaskTable";

type propTypes = {
  searchParams?: Record<string, string> | null | undefined;
};

export default function Tasks({ searchParams }: propTypes) {
  // const [openEditModal, setOpenEditModal] = useState(false);
  const showEditModal = searchParams?.editModal;
  const showAddModal = searchParams?.addModal;
  const showFilterModal = searchParams?.filterModal;

  return (
    <>
      {!showEditModal && !showAddModal && !showFilterModal && (
        <>
          <Title title="Tasks" newBtn page="tasks" />
          <TaskTable />
        </>
      )}

      {showEditModal && (
        <div className="flex justify-center items-center h-screen">
          <Modal title="Edit Task" page="tasks" type="edit" />
        </div>
      )}

      {showAddModal && (
        <div className="flex justify-center items-center h-screen">
          <Modal title="Add Task" page="tasks" type="add" />
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
