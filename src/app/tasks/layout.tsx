import Navbar from "@/common/SideBar";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-full">
        <Navbar active="tasks" />
        <div className="w-screen">{children}</div>
      </div>
    </>
  );
}
