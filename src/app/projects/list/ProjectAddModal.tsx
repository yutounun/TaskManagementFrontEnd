"use client";

import {
  CreateUpdateProjectResponse,
  GetProjectResponse,
} from "@/_types/taskList";
import { postApi } from "@/_utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Button from "@/_common/Button";
import Smile from "@/_common/icons/Smile";
import X from "@/_common/icons/X";
import InputField from "@/_common/InputField";
import SelectBox from "@/_common/SelectBox";
import { useForm } from "react-hook-form";

interface propTypes {
  title: string;
  className?: string;
  projects: GetProjectResponse[];
}

const ProjectAddModal = ({ ...props }: propTypes) => {
  const router = useRouter();
  const [initialDates, setInitialDates] = useState({
    fromDate: null,
    toDate: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      status: "",
      from_date: initialDates,
      to_date: initialDates,
    },
  });

  useEffect(() => {
    // コンポーネントがマウントされた後に日付を設定
    const now = new Date();
    setInitialDates({
      fromDate: now.toISOString().substring(0, 10), // YYYY-MM-DD 形式
      toDate: now.toISOString().substring(0, 10),
    });
  }, []);

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

  function backToList() {
    router.push("list");
  }

  return (
    <div
      onClick={backToList}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        visible bg-black/20`}
    >
      <form
        onSubmit={handleSubmit(handleSubmitProject)}
        className={`bg-white relative px-20 w-[80%] py-5 rounded-lg border-2 border-gray-text flex flex-col items-center gap-10 ${props.className} bg-white rounded-xl shadow p-6 transition-all
          scale-100 opacity-100
        `}
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
          <InputField
            title="Title*"
            // @ts-ignore
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
            // @ts-ignore
            register={register}
            error={errors["status"]?.message}
          />
          <InputField
            title="From Date"
            type="date"
            className="w-[40%]"
            label="from_date"
            register={register}
            error={errors["from_date"]?.message}
          />

          <InputField
            title="To Date"
            type="date"
            className="w-[40%]"
            label="to_date"
            register={register}
            error={errors["to_date"]?.message}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* cancel */}
          <Link href={`/projects/list`}>
            <Button cancel />
          </Link>

          {/* submit */}
          <Button text="Add" modal disabled={!isDirty || !isValid} />
        </div>
      </form>
    </div>
  );
};

export default ProjectAddModal;
