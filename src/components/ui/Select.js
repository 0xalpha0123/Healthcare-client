import React from 'react';

export const Select = ({ children, onChange, label, value }) => (
  <div className="relative inline-flex">
    <select
      className="border border-gray-300 rounded-md text-gray-600 h-10 w-40 mx-2 px-5 hover:border-gray-400 focus:outline-none appearance-none"
      defaultValue={value || 0}
      onChange={onChange}
    >
      {label && (
        <option value={0} disabled>
          {label} 🔽
        </option>
      )}
      {children}
    </select>
  </div>
);
