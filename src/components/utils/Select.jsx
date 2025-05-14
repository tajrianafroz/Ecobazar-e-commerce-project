import React from "react";

const Select = ({ name, options, className }) => {
  return (
    <select
      name={name}
      className={`text-xs text-gray-scale-gray-700 leading-[130%] outline-0 cursor-pointer ${className}`}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
