import React from 'react'
import { useForm } from 'react-hook-form'
function AddUser(props) {

    let{register,handleSubmit,formState:{errors}} = useForm();

    function handleFormSubmit(UserObj){
      console.log(UserObj)
      props.setUsers([...props.users,UserObj])
    }

  return (
    <div>
        <div className="form">
        <h3 className="text-primary text-center">Add User</h3>
            <form action="" className='m-5 p-4' onSubmit={handleSubmit(handleFormSubmit)}>
            
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control mb-4" {...register("username",{required:true})} />
                {errors.username?.type==='required'&&<p className='text-danger'>Username is Mandatory</p>}
                {/* {props.users.some((userObj)=>{ Object.values()     props.users.userObj.username})} */}

                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control mb-4" {...register("email",{required:true})} />
                {errors.email?.type==='required'&&<p className='text-danger'> Email is Mandatory</p>}

                <button className="btn btn-success d-block mx-auto">Add User</button>
            </form>
        </div>
    </div>
  )
}

export default AddUser