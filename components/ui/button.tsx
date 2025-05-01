import React from "react";

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
    >
      {children}
    </button>
  );
}