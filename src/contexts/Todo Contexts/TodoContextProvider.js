import React from "react";
import { TodoContext } from "./TodoContext";
import { useState } from "react";


function TodoContextProvider({children}) {

    let [task,setTask]= useState([]);

  return (
    <div>
        <TodoContext.Provider value={[task,setTask]}>
            {children}
        </TodoContext.Provider>
    </div>
  )
}

export default TodoContextProvider
