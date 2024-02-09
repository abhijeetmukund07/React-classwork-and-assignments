import { useEffect } from "react"
import { useState } from "react"
import UserCount from './UserCount'
function User(){

    let[userData , setUserdata] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        // .then(userObjArr=>console.log(userObjArr))
        .then(userObjArr=>setUserdata(userObjArr))
        .catch(err=>console.log(err))
    },[])
    
    return(
        <div>
            {/* UserCount Component */}
            <UserCount/>

            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        userData.map( (userObj)=>

                            <div className="col col-md-4 w-0" key={userObj.id}>
                                <div className="card card-body h-100 ">
                                    <h2 className="card-title text-center text-primary">User</h2>
                                    <h5 className="card-subtitle text-center text-secondary">Id: {userObj.id}</h5>
                                    <hr />
                                    <p className="lead fs-6">Name: {userObj.name}</p>
                                    <p className="lead fs-6">E-mail:{userObj.email}</p>
                                    <p className="lead fs-6">City: {userObj.address.city}</p>
                                    <p className="lead fs-6">{userObj.phone}</p>
                                    <a href={userObj.website} className="card-link">Website</a>
                                    <button className="btn btn-warning p-2">Add user</button>
                                </div>
                            </div>
                        ,[])
                    }
                </div>
            </div>
        </div>  
    )
}
export default User