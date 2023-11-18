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
      <h1 className="text-3xl font-bold">{props.title} Board</h1>

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
        <div onClick={handleSaveClick}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1667 0H5.66667L0 5.66667V19.8333C0 21.3961 1.27057 22.6667 2.83333 22.6667H14.1667C15.7294 22.6667 17 21.3961 17 19.8333V2.83333C17 1.27057 15.7294 0 14.1667 0ZM7.08333 7.08333H4.95833V2.83333H7.08333V7.08333ZM10.625 7.08333H8.5V2.83333H10.625V7.08333ZM14.1667 7.08333H12.0417V2.83333H14.1667V7.08333Z"
              fill="black"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Title;
