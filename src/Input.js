import React from "react";
import "./App.css";
import Select from "./Select";

export function Input({ disabled, label, value, onChange, onSelectChange }) {
  return (
    <div>
      <div>
        <label className="traco"> - </label>
        <label>{label}</label>
      </div>
      <div>
        <input
          className="input"
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
        <Select value={label} onChange={onSelectChange} />
        <label className="traco"> - </label>
      </div>
    </div>
  );
}
