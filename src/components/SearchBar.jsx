import React from "react";

const SearchBar = ({obj, onChange}) => {
    return(
        <div className=" flex justify-center align-baseline min-w-full h-8 min-h-min pr-4 pl-4">
            <input type="text" 
            placeholder="Что хотите найти..." 
            className="min-w-full p-1 rounded-lg"
            value={obj.search} 
            onChange={(e) => {
                onChange({...obj, search:e.target.value})
                }}/>
        </div>
    )
}

export default SearchBar