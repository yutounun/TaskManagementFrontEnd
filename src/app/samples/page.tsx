"use client";

import { useThemeContext } from "@/context/theme";
import Button from "@/common/Button";
import Tabs from "@/common/Tabs";
import { useState } from "react";
import BoldInput from "@/common/BoldInput";
import InputField from "@/common/InputField";
import Modal from "@/common/Modal";

// This page list all common components
export default function Tasks() {
  const { color, setColor } = useThemeContext();
  const [signIn, setSignIn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="bg-red-800">{color}</div>;
      <Button continue />
      <Button modal />
      <Button cancel />
      <Button new />
      <Tabs left={signIn} setLeft={setSignIn} />
      <BoldInput title="Email" value={inputValue} onChange={setInputValue} />
      <BoldInput title="Password" value={inputValue} onChange={setInputValue} />
      <BoldInput title="Username" value={inputValue} onChange={setInputValue} />
      {inputValue}
      <InputField
        title="Title*"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Title"
        type="text"
      />
      <InputField
        title="Title*"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="date"
      />
      <InputField
        title="Title*"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="time"
      />
      <InputField
        title="Title*"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="fromTo"
      />
      {open && (
        <Modal title="Add New Task" page="tasks" setOpen={setOpen} type="add" />
      )}
      {open && (
        <Modal title="Filter User" setOpen={setOpen} type="edit" page="users" />
      )}
      {open && (
        <Modal
          title="Filter User"
          setOpen={setOpen}
          type="filter"
          page="users"
        />
      )}
    </>
  );
}
