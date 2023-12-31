"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Button from "@/_common/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen mx-20 w-full flex flex-col items-center justify-center gap-5">
      <h1>Something went wrong!</h1>
      <Button
        text="Try Again!!"
        normal
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      />
    </div>
  );
}
