"use client";

import Title from "@/_common/Title";
import { getProjectParams } from "@/_types/projectList";
import { GetProjectResponse } from "@/_types/taskList";
import { getApi } from "@/_utils/api";
import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");

  function handleSearch() {
    const params = {
      title: searchKeyword,
    };
  }

  return (
    <>
      <Title
        handleSearch={handleSearch}
        title="Projects"
        newBtn
        page="projects"
        setSearchKeyword={setSearchKeyword}
      />
    </>
  );
}
