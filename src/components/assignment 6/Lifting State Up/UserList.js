import React from 'react'
import { useState } from 'react'
function UserList(props) {

    // let [users,setUsers] = useState(props.users);

    console.log(users)

    function deleteTask(index){
        let copyUsers = [...props.users]
        copyUsers.splice(index,1)
        setUsers(copyUsers)
    }

  return (
    <div>
            <h4 className="text-primary text-center mb-5 ">List of Users</h4>
            <table className="table table-responsive table-hover">
                <thead className="table-dark text-center">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Operations</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map( (userObj,index)=>(
                            <tr key={index}>
                                <td>{userObj.username}</td>
                                <td>{userObj.email}</td>
                                <td>
                                    <button className="bg-danger text-white w-100">Delete User</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        
    </div>
  )
}

export default UserList