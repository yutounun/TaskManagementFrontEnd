"use client";

import {
  CreateUpdateProjectResponse,
  GetProjectResponse,
} from "@/_types/taskList";
import { postApi } from "@/_utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Button from "@/_common/Button";
import Smile from "@/_common/icons/Smile";
import X from "@/_common/icons/X";
import InputField from "@/_common/InputField";
import SelectBox from "@/_common/SelectBox";
import { hourToMinute } from "@/_utils/date";
import { ThemeContext } from "@/_context/theme";
import { useForm } from "react-hook-form";
import NewInputField from "@/_common/NewInputField";

interface propTypes {
  title: string;
  className?: string;
  projects: GetProjectResponse[];
}

const ProjectAddModal = ({ ...props }: propTypes) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      status: "",
      from_date: new Date(),
      to_date: new Date(),
    },
  });

  async function handleSubmitProject(data) {
    let params = {
      ...data,
      to_date: new Date(data.to_date),
      from_date: new Date(data.from_date),
    };
    await postApi("projects", params).then(
      (res: CreateUpdateProjectResponse) => {
        router.push("/projects/list");
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitProject)}
      className={`bg-white relative px-20 w-[80%] py-5 rounded-lg border-2 border-gray-text flex flex-col items-center gap-10 ${props.className}`}
    >
      {/* open Button */}
      <Link className="absolute top-5 right-5" href={"/projects/list"}>
        <X color="black" />
      </Link>

      {/* Title */}
      <div className="flex justify-start w-full items-center gap-5">
        <Smile color="black" />
        <h1 className="text-2xl font-bold">Add a New Project</h1>
      </div>

      {/* Input fields */}
      <div className="flex flex-wrap w-full gap-5 justify-center">
        <NewInputField
          title="Title*"
          register={register}
          label="title"
          placeholder="Enter Title"
          type="text"
          className="w-[40%]"
          required
          error={errors["title"]?.message}
        />
        <SelectBox
          title="Status"
          className="w-[40%]"
          label="status"
          options={[
            { value: "Not Started", label: "Not Started" },
            { value: "In Progress", label: "In Progress" },
            { value: "On Hold", label: "On Hold" },
            { value: "Under Review", label: "Under Review" },
            { value: "Completed", label: "Completed" },
          ]}
          register={register}
          error={errors["status"]?.message}
        />
        <NewInputField
          title="Period*"
          type="fromTo"
          className="w-[84%]"
          label="from_date"
          label2="to_date"
          register={register}
          required
          error={errors["from_date"]?.message}
          error2={errors["to_date"]?.message}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* cancel */}
        <Link href={`/tasks/list`}>
          <Button cancel />
        </Link>

        {/* submit */}
        <Button text="Add" modal />
      </div>
    </form>
  );
};

export default ProjectAddModal;
