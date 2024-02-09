import React from 'react'
import { useState } from 'react'
import AddUsers from './AddUsers'
import UserList from './UserList'
import UserCount from './UserCount'

function ManageUsers() {

    let[users,setUsers] = useState([]);

  return (
    <div>
        <div className="row">
            <div className="col-sm-4 col-md-4">
                
                <AddUsers users ={users} setUsers = {setUsers}  />
            </div>

            <div className="col-sm-4 col-md-4">
            {/* <h4 className="text-primary ">List of Users</h4> */}
                <UserList users ={users} />
            </div>

            <div className="col-sm-4 col-md-4">
            {/* <h4 className="text-primary ">User Count</h4> */}
                <UserCount users ={users} />
            </div>
        </div>
    </div>
  )
}

export default ManageUsers