import React from "react"
import './App.css';
import Select from "./Select";

export function Input({disabled,label, value, onChange, onSelectChange}){

return(
    <div>
    <div>
        <label>{label}</label>
    </div>
    <div>
        <input className="input" value={value} disabled={disabled} onChange={onChange} />
        <Select value={label} onChange={onSelectChange} />
    </div>
    </div>
)
}