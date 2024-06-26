import React from "react";
import ReactDOM from "react-dom";
import { forwardRef } from "react";

function merge(size) {
  return "bg-[#13232f] border-2 border-[#a0b3b0] h-10 focus:outline-none px-3 text-lg duration-1000 w-[14rem]" + size;
}

const Input = function Input({ size, labelValid, inputOnChange, name, statement, type }) {
  return (
    <div className="flex flex-col mb-3">
      <input className={merge(size)} id={name} placeholder={statement} onChange={inputOnChange} name={name} type={type} required />
      <label htmlFor={name} className="text-gray-400">
        {labelValid(name, statement)}
      </label>
    </div>
  );
};

export default Input;
