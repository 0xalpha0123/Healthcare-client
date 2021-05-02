import React from 'react';

export const Select = ({ children, onChange, label, value }) => (
  <div className="relative bg-white inline-flex overflow-hidden border border-gray-200 rounded-md text-gray-600 h-10 w-40 mx-2 hover:border-gray-300">
    <select
      className="h-full w-full pl-2 cursor-pointer focus:outline-none appearance-none"
      defaultValue={value || 0}
      onChange={onChange}
    >
      {label && (
        <option value={0} disabled>
          {label}
        </option>
      )}
      {children}
    </select>
    <div className="flex justify-center items-center w-10 h-full cursor-pointer border-l border-gray-200">
      x
    </div>
  </div>
);
