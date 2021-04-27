import React from "react";

export const Select = ({ children, onChange, label }) => (
  <select
    className="border border-gray-300 w-full h-12 rounded-full text-gray-600 pl-5 pr-5 bg-white hover:border-gray-400 focus:outline-none appearance-none"
    onChange={onChange}
    defaultValue={0}
  >
    <option value={0} disabled hidden>
      {label}
    </option>
    {children}
  </select>
);

