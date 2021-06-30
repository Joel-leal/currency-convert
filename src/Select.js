import React from "react"
import exchangeRate from "./exChance"

function Select(props){
    return(
        <select className="select" value={props.value} onChange={props.onChange}>
            {Object.keys(exchangeRate)
            .map(key => (
                <option value={key}>{key}</option>
            ))}
        </select>
    )
}

export default Select