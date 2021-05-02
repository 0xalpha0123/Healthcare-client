import React from 'react';

export const SearchInput = ({ value, setValue, placeholder }) => (
  <input
    className="border border-gray-200 rounded-md text-gray-600 w-96 mx-2 px-5 hover:border-gray-300 focus:outline-none appearance-none"
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

export const NumberInput = ({ value, setValue, placeholder }) => (
  <input
    className="border border-gray-200 rounded-md text-gray-600 w-32 mx-2 px-5 hover:border-gray-300 focus:outline-none appearance-none"
    type="text"
    placeholder={placeholder}
    value={value}
    min="0"
    onChange={(e) => {
      const number = e.target.value;

      if (!isNaN(number) && number >= 0) {
        setValue(e.target.value);
      }
    }}
  />
);
