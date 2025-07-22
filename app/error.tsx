"use client";

import { SomethingWentWrong } from "@/components/SomethingWentWrong";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SomethingWentWrong
      errorType="generic"
      title="Something went wrong"
      message="Please try again"
      primaryAction={{
        onClick: reset,
        text: "Try again",
      }}
      secondaryAction={{
        onClick: () => {},
        text: "Cancel",
      }}
    />
  );
}
