
'use client';
import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`inline-block font-semibold px-6 py-3 rounded-full transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
