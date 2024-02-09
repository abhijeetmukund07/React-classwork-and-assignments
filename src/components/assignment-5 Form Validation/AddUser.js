import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './AddUser.css'
function AddUser() {
    let [users,setUsers] = useState([])
    let {register,handleSubmit,formState:{errors}}= useForm();

    function handleFormSubmit(userObj){
        console.log(userObj)
        setUsers([...users,userObj])
        // console.log(users)
    }

  return (

    <div>
        <h3 className="text-center text-primary">User Registration</h3>
        {/* row starts */}
        <div className="row row-cols-md-6 row-cols-xs-1">
            {/* form col starts */}
            <div className="col-xs-1 col-md-5 mx-4 g-3">
                <form action="" onSubmit={handleSubmit(handleFormSubmit)} className='w-100 p-4'>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id='username' className="form-control mb-4" {...register("username",{required:true,minLength:4,maxLength:8})} />
                    {errors.username?.type==='required'&&<p className='text-danger'>Username is required</p>}
                    {errors.username?.type==='minLength'&&<p className='text-warning'>Username should have atleast 4 characters</p>}
                    {errors.username?.type==='maxLength'&&<p className='text-warning'>Username should have atmost 8 characters</p>}

                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input type="date" id='dob' className="form-control mb-4" {...register("dob",{required:true})}/>
                    {errors.dob?.type==='required'&&<p className='text-danger'>Date of birth is required</p>}


                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" id='city' className="form-control mb-4" {...register("city",{required:true})} />
                    {errors.city?.type==='required'&&<p className='text-danger'>City field is required</p>}

                    <button className="btn btn-primary p-3 px-4">Submit</button>
                </form>
            </div>{/*Form col ends*/}

            {/* user list col starts */}
            <div className="col col-xs-1 col-md-6 g-3">
                {users.length===0?<p className='lead display-5 text-center text-warning'>No Users Available</p>:
                    <table className="table table-responsive table-hover w-100 p-4">
                        <thead className="table-dark text-center">
                            <tr>
                                <th>Username</th>
                                <th>Date of Birth</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((userObj) =>(
                                    <tr key={userObj.username}>
                                        <td>{userObj.username}</td>
                                        <td>{userObj.dob}</td>
                                        <td>{userObj.city}</td>
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div> {/*row ends*/}
    </div>
  )
}

export default AddUser