import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-md"
      {...props}
    />
  );
}
