import Navbar from "@/common/SideBar";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-full">
        <Navbar active="users" />
        <div className="w-full mx-20">{children}</div>
      </div>
    </>
  );
}
