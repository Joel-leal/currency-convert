import React from "react";
import currencyOptions from "./exChance";

function Select(props) {
  return (
    <select className="select" value={props.value} onChange={props.onChange}>
      {Object.keys(currencyOptions).map((key) => (
        <option key={key} value={key}>
          {currencyOptions[key]}
        </option>
      ))}
    </select>
  );
}

export default Select;
