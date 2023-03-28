import React, { useEffect, useState } from "react";
import {main} from './main.css'
import TodosList from "./components/TodosList";
import BtnsSection from './components/BtnsSections'
import TodosFilter from "./components/TodosFilter";
import { useTodos } from "./customsHooks/useSort";


// пример, как должно выглядеть
let dataTodo = [
  {
    id: new Date()*Math.random(),
    title: 'Помыть посуду',
    isDone: false,
    isEdit: false,
    year: new Date().getFullYear(),
    month: new Date().getMonth()+1,
    day: new Date().getDate(),
    date: new Date(),
  },
  {
    id: new Date()*Math.random(),
    title: 'Написать эссе',
    isDone: false,
    isEdit: false,
    year: new Date().getFullYear(),
    month: new Date().getMonth()+1,
    day: new Date().getDate(),
    date: new Date(),
  },
  {
    id: new Date()*Math.random(),
    title: 'Сходить в магазин',
    isDone: false,
    isEdit: false,
    year: new Date().getFullYear(),
    month: new Date().getMonth()+1,
    day: new Date().getDate(),
    date: new Date(),
  },
  
]

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []) // сам список
  const [inputValue, setInputValue] = useState('') // значение строки для добавления todo
  const [filterObj, setFilterObj] = useState({search: '', sortMethod: ''})

  const sortedAndFilteredTodos = useTodos(todos, filterObj.sortMethod, filterObj.search)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(sortedAndFilteredTodos))
  }, [sortedAndFilteredTodos])

  const addTodo = () => {
    setTodos([...todos, {
      id: Math.floor(Date.now()*Math.random()),
      title: inputValue,
      isDone:false,
      isEdit: false,
      year: new Date().getFullYear(),
      month: new Date().getMonth()+1,
      day: new Date().getDate(),
      date: new Date(),
    }])
    setInputValue('')
  }

  const deleteTodo = (id) => {
    setTodos([...todos].filter(elem => elem.id !== id)) // можно обойтись без spread
  }

  const changeTodo = (id, text) => {
    setTodos([...todos].map(e => {
      if(e.id === id){
        e.title = text
      }
      return e
    }))
  }

  const startEdit = (id) => {
    setTodos([...todos].map(e => {
      if(e.id === id){
        e.isEdit = true
      }

      return e
    }))
  }

  const endEdit = (id) => {
    setTodos([...todos].map(e => {
      if(e.id === id){
        e.isEdit = false
      }

      return e
    }))
  }

  const setChecked = (id) => {
    setTodos([...todos].map(e => {
      if(e.id === id){
        e.isDone = !e.isDone
      }
      return e
    }))
  }

  const makeAllDone = () => {
    setTodos([...todos].map(e => {
      e.isDone = true
      return e
    }))
  }

  const makeAllNotDone = () => {
    setTodos([...todos].map(e => {
      e.isDone = false
      return e
    }))
  }

  const deleteAllDone = () => {
    setTodos([...todos].filter(e => e.isDone === false))
  }

  return (
    <div className="min-h-screen min-w-full bg-slate-800  pt-3 pb-3 flex justify-center">
      <div className="flex justify-center flex-col max-w-screen-md items-center">
        <TodosFilter filterObj={filterObj} setFilterObj={setFilterObj}/>
        <h1 className=" p-5 border-b-2 bg-slate-700 border-black text-lg text-blue-300 text-center min-w-full mt-16">List Todo</h1>
        <div className="container bg-slate-600 flex flex-col max-h-96 overflow-scroll mb-16 ">
          
          <TodosList 
            list={sortedAndFilteredTodos}
            changeTodo={changeTodo}
            endEdit={endEdit}
            setChecked={setChecked}
            startEdit={startEdit}
            deleteTodo={deleteTodo}
          />
          
          <input type="text" 
            className=" bg-slate-600 mt-6 h-8 outline-none border-b-2 border-black text-gray-300 pl-5" 
            placeholder="Type your todo..."
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if(e.code === 'Enter'){
                addTodo()
              }}}
            />
        </div>
        <BtnsSection 
          makeAllDone={makeAllDone}
          makeAllNotDone={makeAllNotDone}
          deleteAllDone={deleteAllDone}
        />
      </div>
    </div>
  );
}

export default App;