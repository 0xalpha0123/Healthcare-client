import React from "react";

export const Input = ({ value, setValue, placeholder}) => (
  <input
    className="focus:outline-none w-full h-12 pl-5 text-gray-600 border border-gray-300 hover:border-gray-400 rounded-full appearance-none"
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

export const InputNumber = ({ value, setValue, placeholder, type, onChange }) => (
    <input
        className="focus:outline-none w-full h-12 pl-5 pr-10 text-gray-600 border border-gray-300 hover:border-gray-400 rounded-full appearance-none"
        type="text"
        placeholder={placeholder}
        value={value}
        min="0"
        onChange={(e) => {

          const number = e.target.value;

          if(!isNaN(number) && number >= 0) {
            setValue(e.target.value)
          }
        }}
    />
);

