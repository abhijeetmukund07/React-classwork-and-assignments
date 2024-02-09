import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'
import TodoCount from './TodoCount'


function ManageTodo() {
  return (
    <div>
        <h1 className="text-primary text-center">To-Do App</h1>
        <div className="row">
            
            <div className="col-md-4 col-xs-1">
                <AddTodo/>
            </div>

            <div className="col-md-4 col-xs-1">
                <DisplayTodo/>
            </div>

            <div className="col-md-4 col-xs-1">
                <TodoCount/>
            </div>

        </div>
        
    </div>
  )
}

export default ManageTodo