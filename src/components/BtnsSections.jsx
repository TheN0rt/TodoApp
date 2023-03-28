import React from "react";

const BtnsSection = ({makeAllDone, makeAllNotDone, deleteAllDone}) => {
    
    return(
        <div id="btns" className="flex justify-between align-baseline">
          <button 
            className='text-white flex justify-center align-middle border-2 rounded-lg bg-cyan-800 p-2 border-cyan-800 mr-2 hover:bg-white hover:text-cyan-800'
            onClick={() => makeAllDone()}>
            Пометить все выполненными
          </button>
          <button
            className='text-white flex justify-center align-middle border-2 rounded-lg bg-cyan-800 p-2 border-cyan-800 mr-2 hover:bg-white hover:text-cyan-800'
            onClick={() => makeAllNotDone()}>
            Пометить все невыполненными
          </button>
          <button 
            className='text-white flex justify-center align-middle border-2 rounded-lg bg-red-700 p-2 border-red-700 hover:bg-white hover:text-red-700'
            onClick={() => deleteAllDone()}>
            Удалить все выполненные
          </button>
        </div>
    )
}

export default BtnsSection