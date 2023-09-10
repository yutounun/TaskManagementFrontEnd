"use client";

import SideBar from "@/_common/SideBar";
import { ThemeContext } from "@/_context/theme";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { errorMsg, setErrorMsg } = useContext(ThemeContext);
  const searchPathParams = useSearchParams();
  useEffect(() => {
    setErrorMsg("");
  }, [searchPathParams, setErrorMsg]);

  return (
    <>
      <div className="flex bg-all-bg  h-full">
        <SideBar active="tasks" />
        <div className="mx-20 w-full flex flex-col gap-5">
          {errorMsg && (
            <div className="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info shrink-0 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{errorMsg}</span>
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
