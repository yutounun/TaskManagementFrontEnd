import Navbar from "@/common/SideBar";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex bg-all-bg  h-full">
        <Navbar active="tasks" />
        <div className="mx-20 w-full">{children}</div>
      </div>
    </>
  );
}
