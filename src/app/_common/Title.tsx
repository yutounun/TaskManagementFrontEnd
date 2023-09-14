import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import Filter from "./icons/Filter";
import Search from "./icons/Search";
import InputField from "./InputField";

interface propTypes {
  title: string;
  newBtn?: boolean;
  page?: string;
  handleSearch?: () => void;
  setSearchKeyword?: (value: string) => void;
  updateManHourMin?: () => void;
}
const Title = ({ ...props }: propTypes) => {
  /**
   * Handles the save click event to save the timer
   *
   * @param {none} - No parameters.
   * @return {void} - No return value.
   */
  function handleSaveClick() {
    props.updateManHourMin();
  }
  return (
    <div className="flex items-center gap-4 mt-10">
      {/* Page Title */}
      <h1 className="text-2xl font-bold">{props.title} Board</h1>

      {/* Search Window */}
      <InputField
        onChange={(e) => props.setSearchKeyword(e.target.value)}
        placeholder="Enter Title"
        type="text"
      />

      {/* Search Run Button */}
      <Search color="#333333" onClick={props.handleSearch} />

      {/* Filter Icon that opens filter modal */}
      {/* <Link href={`/${props.page}/list?filterModal=true`}>
        <Filter color="#333333" />
      </Link> */}

      {/* Add New Task Button that opens add modal */}
      {props.newBtn && (
        <Link href={`/${props.page}/list?addModal=true`}>
          <Button new />
        </Link>
      )}

      {/* Save Timer Button */}
      {props.page === "tasks" && (
        <Button
          onClick={handleSaveClick}
          others
          className="bg-success"
          text="Save"
        />
      )}
    </div>
  );
};

export default Title;
