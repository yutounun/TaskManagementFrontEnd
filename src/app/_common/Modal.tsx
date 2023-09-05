"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "./Button";
import Smile from "./icons/Smile";
import X from "./icons/X";
import InputField from "./InputField";

interface propTypes {
  title: string;
  type: "add" | "edit" | "filter";
  page: "tasks" | "projects" | "users";
  className?: string;
}

const Modal = ({ ...props }: propTypes) => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  // TODO: どのモーダルかによってformデータは分ける必要がある。多分handleSubmitで親コンポーネントに渡すときに条件分岐すれば良い。
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    priority: "",
    period: "",
    manHour: "",
    username: "",
    email: "",
    createdAtFrom: "",
    createdAtTo: "",
    updatedAtFrom: "",
    updatedAtTo: "",
  });

  /**
   * Handles the submission of the form.
   *
   * @param {object} event - The event object.
   * @return {void} This function does not return anything.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData :", formData);

    router.back();
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

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white relative px-20 py-5 rounded-lg border-2 w-1/2 border-gray-text flex flex-col items-center gap-10 ${props.className}`}
    >
      {/* open Button */}
      <Link className="absolute top-5 right-5" href={`/${props.page}/list`}>
        <X color="black" />
      </Link>

      {/* Title */}
      <div className="flex justify-start w-full items-center gap-5">
        <Smile color="black" />
        <h1 className="text-2xl font-bold">{props.title}</h1>
      </div>

      {/* Input fields */}
      {/* Task and Project page */}
      {(props.page === "tasks" || props.page === "projects") && (
        <div className="flex flex-wrap w-full gap-5 justify-center">
          <InputField
            title="Title*"
            value={inputValue}
            placeholder="Enter Title"
            type="text"
            className="w-full"
            onChange={(e) => handleChange(e, "title")}
          />
          <InputField
            title="Type*"
            value={inputValue}
            type="text"
            placeholder="Enter Type"
            className="w-full"
            onChange={(e) => handleChange(e, "type")}
          />
          <InputField
            title="Priority*"
            value={inputValue}
            type="text"
            placeholder="Enter Priority"
            className="w-full"
            onChange={(e) => handleChange(e, "priority")}
          />
          <InputField
            title="Period*"
            value={inputValue}
            type="fromTo"
            className="w-full"
            onChange={(e) => handleChange(e, "period")}
          />
          <InputField
            title="Man Hour"
            value={inputValue}
            type="time"
            className="w-full"
            onChange={(e) => handleChange(e, "manHour")}
          />
        </div>
      )}

      {/* User page */}
      {props.page === "users" && (
        <>
          <InputField
            title="Username*"
            value={inputValue}
            placeholder="Enter Username"
            type="text"
            className="w-full"
            onChange={(e) => handleChange(e, "username")}
          />
          <InputField
            title="Email*"
            value={inputValue}
            type="text"
            placeholder="Enter Email"
            className="w-full"
            onChange={(e) => handleChange(e, "email")}
          />
        </>
      )}

      {props.page === "users" && props.type === "filter" && (
        <>
          <InputField
            title="Created At"
            value={inputValue}
            type="fromTo"
            className="w-full"
            onChange={(e) => handleChange(e, "createdAt")}
          />
          <InputField
            title="Updated At"
            value={inputValue}
            type="fromTo"
            className="w-full"
            onChange={(e) => handleChange(e, "updatedAt")}
          />
        </>
      )}

      {/* Buttons */}
      <div className="flex gap-4">
        {/* cancel */}
        <Link href={`/${props.page}/list`}>
          <Button cancel />
        </Link>

        {/* submit */}
        {props.type === "add" && <Button text="Add" modal />}
        {props.type === "edit" && <Button text="Edit" modal />}
        {props.type === "filter" && <Button text="Filter" modal />}
      </div>
    </form>
  );
};

export default Modal;
