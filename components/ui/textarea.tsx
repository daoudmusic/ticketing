import React from "react";

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full p-2 border border-gray-300 rounded-md"
      {...props}
    />
  );
}
