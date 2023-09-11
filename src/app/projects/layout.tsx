import SideBar from "@/_common/SideBar";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex bg-all-bg h-full">
        <SideBar active="projects" />
        <div className="w-full mx-20">{children}</div>
      </div>
    </>
  );
}
