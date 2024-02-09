import React from 'react'

function UserCount (props) {
  return (
    <div>
        <h4 className="text-primary text-center mb-5">User Count</h4>
        <h3 className="text-warning text-center">{props.users.length}</h3>
    </div>
  )
}

export default UserCount