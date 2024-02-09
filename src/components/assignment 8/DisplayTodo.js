import React from 'react'
import { TodoContext } from '../../contexts/Todo Contexts/TodoContext';
import { useContext } from 'react';

function DisplayTodo() {

    let [task,setTask] = useContext(TodoContext)
    function deleteTask(index){
        let copyTasks = [...task]
        copyTasks.splice(index,1)
        setTask(copyTasks)
    }


  return (
    <div>
         <h4 className="text-secondary text-center">Tasks</h4>

{/* Conditional Rendering the table only if some task is present */}
               { task.length!==0?
                    <table className="table table-responsive table-striped table-hover m-3">
                            <thead className='table-dark'>
                                <tr>
                                    <th>Tasks</th>
                                    <th>Operations</th>
                                </tr>
                            </thead>

                            <tbody className='table-light'>
                                {
                                task.map((taskObj,index)=>(
                                    <tr key={index}>
                                        <td>{taskObj.task}</td>
                                        <td>
                                            <button className="btn btn-danger p-1" onClick={()=>deleteTask(index)}> Delete Task </button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                    </table>:<p className='lead text-center display-6 text-success'>No Tasks Available</p>}
            
    </div>
  )
}

export default DisplayTodo