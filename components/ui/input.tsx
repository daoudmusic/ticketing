import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black"
    />
  );
}