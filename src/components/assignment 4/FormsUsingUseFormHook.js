import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function FormsUsingUseFormHook() 
{
    let {register,handleSubmit} = useForm()
    // function handleFormSubmit(data){
    //     console.log(data)
    // }

  return (
    <div>
        <h1 className="text-center text-primary">useForm Hook Demo</h1>
        <div className="container form">
        <form className='w-75 bg-light mx-auto mt-5' onSubmit={handleSubmit( (data)=> console.log(data) )}>
            <div className="mb-3 username">
                <label htmlFor="Username" className='form-label'>Username</label>
                <input type="text" className='form-control w-75' id='Username' {...register("Username")} />
            </div>

            <div className="email mb-3">
                <label htmlFor="email" className='form-label'>E-mail</label>
                <input type="email" className='form-control w-75' id='email'{...register("email")} />
            </div>

            <div className="password mb-3">
            <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" id='password' autoComplete='true' className='form-control w-75' {...register("password")} />
            </div>

            <div className="gender-select mb-3">

                <input type="radio" name="gender" id="male" className='form-check-input'{...register("male")}  />
                <label htmlFor="male"  className='form-label'>Male</label>
                <br />
                <input type="radio" name="gender" id="female" className='form-check-input ' {...register("female")} />
                <label htmlFor="female"  className='form-label'>Female</label>
            </div>

            <div className="selectSkill mb-3 w-50">
                <select name="skills" id="skills" className='form-select mb-3 w-75' {...register("skills")}>
                    <label htmlFor="Skills" className='form-label'>Skills</label>
                    <option value="null" disabled>Select Primary Skill</option>
                    <option value="js">JavaScript</option>
                    <option value="react">React</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                </select>
            </div>
            
            <div className="submit-button">
                <button className='btn btn-success mb-4 '>Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default FormsUsingUseFormHook