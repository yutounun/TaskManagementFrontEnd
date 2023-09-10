"use client";

import { GetProjectResponse } from "@/_types/taskList";
import { putApi } from "@/_utils/api";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/_common/Button";
import Smile from "@/_common/icons/Smile";
import X from "@/_common/icons/X";
import InputField from "@/_common/InputField";
import SelectBox from "@/_common/SelectBox";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { minuteToHour, formatDate, hourToMinute } from "@/_utils/date";

interface propTypes {
  title: string;
  className?: string;
  projects: GetProjectResponse[];
  searchParams?: Record<string, string> | null | undefined;
}

const TaskEditModal = ({ ...props }: propTypes) => {
  const router = useRouter();
  const { selectedTask } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    title: selectedTask.title,
    status: selectedTask.status,
    type: selectedTask.type,
    priority: selectedTask.priority,
    man_hour_min: minuteToHour(selectedTask.man_hour_min),
    from_date: formatDate(selectedTask.from_date),
    to_date: formatDate(selectedTask.to_date),
    project_id: selectedTask.project_id,
    user_id: selectedTask.user_id,
  });

  /**
   * Handles the submission of the form.
   *
   * @param {object} event - The event object.
   * @return {void} This function does not return anything.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    let finalFormData = { ...formData };
    finalFormData.man_hour_min = hourToMinute(formData.man_hour_min);
    finalFormData.from_date = new Date(formData.from_date);
    finalFormData.to_date = new Date(formData.to_date);

    putApi(`tasks/${selectedTask.id}`, finalFormData)
      .then((res) => {
        console.log(res);
        router.back();
      })
      .catch((err) => {
        console.log(err);
      });
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
    const min = parseInt(
      e.target.value.split(":")[0] * 60 + e.target.value.split(":")[1]
    );
    setFormData({ ...formData, [field]: min });
  };

  const handleDateChange = (e, field) => {
    setFormData({ ...formData, [field]: new Date(e.target.value) });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white relative px-20 py-5 rounded-lg border-2 w-1/2 border-gray-text flex flex-col items-center gap-10 ${props.className}`}
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
          value={formData.title}
          placeholder="Enter Title"
          type="text"
          className="w-full"
          onChange={(e) => handleChange(e, "title")}
        />
        <InputField
          title="Status*"
          value={formData.status}
          type="text"
          placeholder="Enter Status"
          className="w-full"
          onChange={(e) => handleChange(e, "status")}
        />
        <InputField
          title="Type*"
          value={formData.type}
          type="text"
          placeholder="Enter Type"
          className="w-full"
          onChange={(e) => handleChange(e, "type")}
        />
        <InputField
          title="Priority*"
          value={formData.priority}
          type="text"
          placeholder="Enter Priority"
          className="w-full"
          onChange={(e) => handleChange(e, "priority")}
        />
        <InputField
          title="Period*"
          value={formData.from_date}
          value2={formData.to_date}
          type="fromTo"
          className="w-full"
          onChange={(e) => handleDateChange(e, "from_date")}
          onChange2={(e) => handleDateChange(e, "to_date")}
        />
        <InputField
          title="Man Hour"
          type="time"
          value={formData.man_hour_min}
          className="w-full"
          onChange={(e) => handleManHourChange(e, "man_hour_min")}
        />
        <SelectBox
          title="Project"
          className="w-full"
          projects={props.projects}
          onChange={(e) => handleChange(e, "project_id")}
        />
        <SelectBox
          title="Project"
          className="w-full"
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
        <Button text="Edit" modal />
      </div>
    </form>
  );
};

export default TaskEditModal;
