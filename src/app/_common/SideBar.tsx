import Pen from "@/_common/icons/Pen";
import Tower from "@/_common/icons/Tower";
import User1 from "@/_common/icons/User1";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";

interface PropsType {
  active: "tasks" | "projects" | "users";
}
export default function SideBar({ ...props }: PropsType) {
  function logout() {
    localStorage.removeItem("accessToken");
  }
  return (
    <div className="fixed w-64 min-h-screen px-5 py-10 bg-bg-base flex flex-col justify-between">
      <div className=" flex flex-col gap-4 ">
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
          <Tower
            color={`${props.active === "projects" ? "white" : "#737272"}`}
          />
          <span>Projects</span>
        </Link>

        {/* Users */}
        {/* <Link
          href="/users/list"
          className={`flex items-center gap-2 text-xl font-bold ${
            props.active === "users" ? "text-white" : "text-inactive"
          }`}
        >
          <User1 color={`${props.active === "users" ? "white" : "#737272"}`} />
          <span>Users</span>
        </Link> */}
      </div>

      {/* Logout */}
      <Link
        onClick={logout}
        href="/home"
        className="flex items-center gap-3 text-xl font-bold text-white"
      >
        <BiLogOut size={22} />
        <span>Logout</span>
      </Link>
    </div>
  );
}
