import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa"


const TodosList = ({list, changeTodo, endEdit, setChecked, startEdit, deleteTodo}) => {
    const copy = list.filter(e => e.title.length) // недочет, нужно это делать после подтверждения изменения заголовка
    let result = copy.map(elem =>{
        let p = !elem.isEdit ? 
          <p className={elem.isDone ? 'line-through' : ''}>{elem.title}</p>
        :
          <input type='text'
            value={elem.title}
            className=" bg-slate-600 h-8 outline-none border-black text-gray-300 pl-3 pr-3 border-2"
            onChange={e => changeTodo(elem.id, e.target.value)}
            onBlur={() => endEdit(elem.id)}
            onKeyDown={e => {
                if(e.code === "Enter"){
                    endEdit(elem.id)
                }
            }}
          />
    
        return (<div key={elem.id} className='box-border text-blue-100 border-b-2 text-md border-black p-4 flex flex-row justify-between items-center'>
          <input
          type='checkbox'
          checked={elem.isDone}
          onChange={() => setChecked(elem.id)}/>
          {p}
          <div className="flex flex-row items-center gap-4">
            <p>{`${elem.year}-${elem.month}-${elem.day}`}</p>
            <FaEdit className=" text-lg hover:text-slate-800" onClick={()=> {
              startEdit(elem.id)
              }}/>
            <FaTrash  className=" text-lg hover:text-slate-800" onClick={() => deleteTodo(elem.id)}/>
          </div> 
        </div>)
      }
        )
    return(
        <>
        {result}
        </>
    )
}

export default TodosList