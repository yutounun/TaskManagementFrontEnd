"use client";

import { useThemeContext } from "@/context/theme";
import Button from "@/_common/Button";
import Tabs from "@/_common/Tabs";
import { useState } from "react";
import BoldInput from "@/_common/BoldInput";
import Modal from "@/_common/Modal";
import Title from "@/_common/Title";
import InputField from "@/_common/InputField";

// This page list all common components
export default function Tasks() {
  // const { color, setColor } = useThemeContext();
  const [signIn, setSignIn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(true);
  return (
    <>
      <Title title="Tasks" newBtn />
      {/* <div className="bg-red-800">{color}</div>; */}
      <Button continue />
      <Button modal />
      <Button cancel />
      <Button new />
      <Tabs left={signIn} setLeft={setSignIn} />
      <BoldInput title="Email" onChange={setInputValue} />
      <BoldInput title="Password" onChange={setInputValue} />
      <BoldInput title="Username" onChange={setInputValue} />
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
