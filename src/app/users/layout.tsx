import Navbar from "@/common/SideBar";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar active="users" />
      <div className="flex h-full">
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
