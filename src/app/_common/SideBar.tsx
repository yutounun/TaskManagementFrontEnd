import Pen from "@/_common/icons/Pen";
import Tower from "@/_common/icons/Tower";
import User1 from "@/_common/icons/User1";
import Link from "next/link";

interface PropsType {
  active: "tasks" | "projects" | "users";
}
export default function SideBar({ ...props }: PropsType) {
  return (
    <div className="flex flex-col px-5 py-10 bg-bg-base gap-4 w-80 h-screen">
      {/* Menu */}
      <h1 className="mb-3 text-xxl text-white font-bold">Menu</h1>

      {/* Tasks */}
      <Link
        href="/tasks/list"
        className={`flex items-center gap-2 text-xl font-bold ${
          props.active === "tasks" ? "text-white" : "text-inactive"
        }`}
      >
        <Pen color={`${props.active === "tasks" ? "white" : "#737272"}`} />
        <span>Tasks</span>
      </Link>

      {/* Projects */}
      <Link
        href="/projects/list"
        className={`flex items-center gap-2 text-xl font-bold ${
          props.active === "projects" ? "text-white" : "text-inactive"
        }`}
      >
        <Tower color={`${props.active === "projects" ? "white" : "#737272"}`} />
        <span>Projects</span>
      </Link>

      {/* Users */}
      <Link
        href="/users/list"
        className={`flex items-center gap-2 text-xl font-bold ${
          props.active === "users" ? "text-white" : "text-inactive"
        }`}
      >
        <User1 color={`${props.active === "users" ? "white" : "#737272"}`} />
        <span>Users</span>
      </Link>
    </div>
  );
}
