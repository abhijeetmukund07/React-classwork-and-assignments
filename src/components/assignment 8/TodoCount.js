import React from 'react'
import { TodoContext } from '../../contexts/Todo Contexts/TodoContext';
import { useContext } from 'react';

function TodoCount() {

    let[task]=useContext(TodoContext);

  return (
    <div>
         <h4 className="text-secondary text-center">Tasks Counter</h4>
         <p className="lead text-center display-5 m-3">{task.length}</p>
    </div>
  )
}

export default TodoCount