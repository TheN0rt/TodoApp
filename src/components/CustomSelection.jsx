import React from "react";

const CustomSelection = ({option, defaultValue, obj, onChange}) => {

    return(
        <select className="mt-4" 
            value={obj.sortMethod}
            onChange={(e) => onChange({...obj, sortMethod:e.target.value})}>
                <option disabled value="">{defaultValue}</option>
                {option.map(e => <option key={e.value} value={e.value}>{e.name}</option>)}
        </select>
    )
}

export default CustomSelection