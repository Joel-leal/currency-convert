import React from "react";
import "./App.css";
import Select from "./Select";
import currencyOptions from "./exChance";

export function Input({
  disabled,
  selectValue,
  inputValue,
  onChange,
  onSelectChange,
}) {
  return (
    <div>
      <div>
        <label className="traco"> - </label>
        <label>{currencyOptions[selectValue]}</label>
      </div>
      <div>
        <input
          className="input"
          value={inputValue}
          disabled={disabled}
          onChange={onChange}
        />
        <Select value={selectValue} onChange={onSelectChange} />
        <label className="traco"> - </label>
      </div>
    </div>
  );
}
