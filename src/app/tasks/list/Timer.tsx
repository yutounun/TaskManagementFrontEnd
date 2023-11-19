"use client";

import Button from "@/_common/Button";
import Pause from "@/_common/icons/Pause";
import Play from "@/_common/icons/Play";
import Modal from "@/_common/Modal";
import Tooltip from "@/_common/Tooltip";
import React, { useRef, useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = ({
  initialMinutes,
  setManHourMin,
}: {
  initialMinutes: number;
  setManHourMin: (manHourMin: number) => void;
}) => {
  const { minutes, hours, days, isRunning, start, pause, reset } = useStopwatch(
    { autoStart: false }
  );
  const prevMinutesRef = useRef(minutes);
  const [localInitialMinutes, setLocalInitialMinutes] =
    useState(initialMinutes);
  const [open, setOpen] = useState(false);
  const [showsWarning, setShowsWarning] = useState(false);

  // manHourMin is updated every mins
  useEffect(() => {
    if (prevMinutesRef.current !== minutes) {
      setManHourMin(localInitialMinutes + minutes + hours * 60);
      prevMinutesRef.current = minutes;
    }
  }, [localInitialMinutes, minutes, hours, setManHourMin]);

  useEffect(() => {
    setLocalInitialMinutes(initialMinutes);
  }, []);

  function handlePause() {
    pause();
    setShowsWarning(true);
  }

  function handleStart() {
    start();
    setShowsWarning(false);
  }

  return (
    <div className="w-full">
      <div className="flex w-full gap-1 items-center">
        {isRunning ? (
          <Tooltip dataTip="Pause tracking man-hour">
            <Pause color="#333333" onClick={handlePause} />
          </Tooltip>
        ) : (
          <Tooltip dataTip="Start tracking man-hour">
            <Play color="#333333" onClick={handleStart} />
          </Tooltip>
        )}
        <div
          className="text-gray-on-gray cursor-pointer"
          onClick={isRunning ? handlePause : handleStart}
        >
          <span>{days}Days:</span>
          <span>{hours + Math.floor(localInitialMinutes / 60)}H:</span>
          <span>{minutes + (localInitialMinutes % 60)}M</span>
        </div>
      </div>
      <Modal open={showsWarning} onClose={() => setShowsWarning(false)}>
        <div className="flex">
          <h2 className="text-center font-bold text-[28px]">WARNING</h2>
        </div>
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
        <p className="text-center text-gray-on-gray">
          Please click the save icon <br />
          to save the man hour
        </p>
        <Button
          className="bg-warning"
          others
          onClick={() => setShowsWarning(false)}
        >
          CLOSE
        </Button>
      </Modal>
    </div>
  );
};

export default Timer;
