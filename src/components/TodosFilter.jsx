import React from "react";
import SearchBar from "./SearchBar";
import CustomSelection from "./CustomSelection";

const TodosFilter = ({filterObj, setFilterObj}) => {

    return(
        <>
            <SearchBar obj={filterObj} onChange={setFilterObj}/>
            <CustomSelection defaultValue={"Сортировка:"} 
            option={[
                {value: 'title', name: 'По названию'},
                {value: 'date', name: 'По дате'},
                {value: 'isDone', name: 'По выполненным НЕ НАЖИМАТЬ ПОКА'}, // реализовать собственный метод сортировки по булевым значениям 
            ]}
            obj={filterObj}
            onChange={setFilterObj}/>
        </>
    )
}

export default TodosFilter