"use client";

import { useFormStatus } from "react-dom";

export default function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="border bg-red-400 p-1 w-[85px]">
      {pending ? "Deleting ..." : "Delete"}
    </button>
  );
}
