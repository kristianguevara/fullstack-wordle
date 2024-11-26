import React from "react";

type CellProps = {
  letter?: string;
  status?: "green" | "yellow" | "gray" | "current";
};

export default function Cell({ letter = "", status }: CellProps) {
  const statusStyles = {
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-white",
    gray: "bg-gray-400 text-white",
    current: "bg-white border-2 border-black",
  };

  return (
    <div
      className={`flex items-center justify-center h-12 w-12 border rounded ${
        status ? statusStyles[status] : "bg-gray-200"
      }`}
    >
      <span className="text-xl font-bold">{letter.toUpperCase()}</span>
    </div>
  );
}
