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

interface propTypes {
  title: string;
  className?: string;
  projects: GetProjectResponse[];
}

const TaskAddModal = ({ ...props }: propTypes) => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState<CreateUpdateProjectResponse>({
    title: "",
    status: "",
    type: "",
    priority: 0,
    man_hour_min: "",
    from_date: new Date(),
    to_date: new Date(),
    project_id: "",
    user_id: "",
  });
  let localErrorMsg = "";

  const { errorMsg, setErrorMsg } = useContext(ThemeContext);
  /**
   * Handles the submission of the form.
   *
   * @param {object} event - The event object.
   * @return {void} This function does not return anything.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // In case project id and user id is default value
    let finalFormData = { ...formData };

    if (finalFormData.project_id === "") {
      finalFormData.project_id = props.projects[0]?.id;
    }
    if (finalFormData.user_id === "") {
      finalFormData.user_id = props.projects[0]?.id;
    }
    if (finalFormData.status === "") {
      finalFormData.status = !finalFormData.status && "Not Started";
    }
    if (finalFormData.priority === "") {
      finalFormData.priority = !finalFormData.priority && "critical";
    }

    if (finalFormData.man_hour_min === "") {
      finalFormData.man_hour_min = 0;
    }

    // Set Alert message when any of the field except for man hour is empty
    if (
      finalFormData.title === "" ||
      finalFormData.type === "" ||
      finalFormData.from_date === "" ||
      finalFormData.to_date === ""
    ) {
      localErrorMsg =
        "Please ensure all fields are filled out, excluding the 'Man Hour' field.";
    }

    if (localErrorMsg === "") {
      postApi("tasks", finalFormData)
        .then((res) => {
          console.log(res);
          router.back();
        })
        .catch((err) => {
          // setErrorMsg(err);
          console.log(err);
        });
    } else {
      setErrorMsg(localErrorMsg);
    }
  };

  /**
   * Handles the change event for a form field.
   *
   * @param {Event} e - the change event object
   * @param {string} field - the name of the form field
   * @return {void}
   */
  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  /**
   * Handles the change event for the man hour input field.
   *
   * @param {Event} e - The change event.
   * @param {string} field - The field to be updated in the form data.
   * @return {void} This function does not return anything.
   */
  const handleManHourChange = (e, field) => {
    const min = hourToMinute(e.target.value);
    setFormData({ ...formData, [field]: min });
  };

  const formatDate = (e, field) => {
    setFormData({ ...formData, [field]: new Date(e.target.value) });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white relative px-20 w-[80%] py-5 rounded-lg border-2 border-gray-text flex flex-col items-center gap-10 ${props.className}`}
    >
      {/* open Button */}
      <Link className="absolute top-5 right-5" href={`/tasks/list`}>
        <X color="black" />
      </Link>

      {/* Title */}
      <div className="flex justify-start w-full items-center gap-5">
        <Smile color="black" />
        <h1 className="text-2xl font-bold">{props.title}</h1>
      </div>

      {/* Input fields */}
      <div className="flex flex-wrap w-full gap-5 justify-center">
        <InputField
          title="Title*"
          placeholder="Enter Title"
          type="text"
          className="w-[40%]"
          onChange={(e) => handleChange(e, "title")}
        />
        <SelectBox
          title="Status"
          className="w-[40%]"
          options={[
            { value: "Not Started", label: "Not Started" },
            { value: "In Progress", label: "In Progress" },
            { value: "On Hold", label: "On Hold" },
            { value: "Under Review", label: "Under Review" },
            { value: "Completed", label: "Completed" },
          ]}
          onChange={(e) => handleChange(e, "status")}
        />
        <InputField
          title="Type*"
          type="text"
          placeholder="Enter Type"
          className="w-[40%]"
          onChange={(e) => handleChange(e, "type")}
        />
        <SelectBox
          title="Priority*"
          className="w-[40%]"
          options={[
            { value: "critical", label: "critical" },
            { value: "urgent", label: "urgent" },
            { value: "normal", label: "normal" },
            { value: "optional", label: "optional" },
          ]}
          onChange={(e) => handleChange(e, "priority")}
        />
        <InputField
          title="Period*"
          type="fromTo"
          className="w-[84%]"
          onChange={(e) => formatDate(e, "from_date")}
          onChange2={(e) => formatDate(e, "to_date")}
        />
        <InputField
          title="Man Hour"
          type="time"
          className="w-[40%]"
          onChange={(e) => handleManHourChange(e, "man_hour_min")}
        />
        <SelectBox
          title="Project"
          className="w-[40%]"
          projects={props.projects}
          onChange={(e) => handleChange(e, "project_id")}
        />
        <SelectBox
          title="User"
          className="w-[40%]"
          projects={props.projects}
          onChange={(e) => handleChange(e, "user_id")}
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

export default TaskAddModal;
