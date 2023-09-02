import React, { useState } from "react";
import Button from "./Button";
import Filter from "./icons/Filter";
import Search from "./icons/Search";
import InputField from "./InputField";

interface propTypes {
  title: string;
  newBtn?: boolean;
  onChange?: () => void;
}
const Title = ({ ...props }: propTypes) => {
  return (
    <div className="flex items-center gap-4 mx-40">
      {/* Page Title */}
      <h1 className="text-2xl font-bold">{props.title} Board</h1>

      {/* Search Window */}
      <InputField
        onChange={props.onChange}
        placeholder="Enter Title"
        type="text"
      />

      {/* Search Run Button */}
      <Search color="#333333" />

      {/* Filter Icon that opens filter modal */}
      <Filter color="#333333" />

      {/* Add New Task Button that opens add modal */}
      {props.newBtn && <Button new />}
    </div>
  );
};

export default Title;
