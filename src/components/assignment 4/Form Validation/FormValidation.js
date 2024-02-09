import React from 'react'
import './FormValidation.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
function FormValidation() {

    let {register,handleSubmit,formState:{errors}}= useForm();

    function handleFormSubmit(userObj){
        console.log(userObj);
    }

    console.log("Errors: ",errors)

  return (
    <div>
        <div className="form m-5 w-50 mx-auto p-4">
        <h3 className=" text-secondary mb-4 mx-4">Registration Form</h3>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                {/* Row-1 */}
                    <div className="row mb-3">

                        <div className="col-xs-1 col-6 mb-3">
                            <label htmlFor="fname" className='mb-1 mx-2 form-label'>First Name</label>
                            <input type="text" className='form-control' {...register("fname",{required:true,minLength:4,maxLength:6})}/>
                            {errors.fname?.type==='required' && <p className='text-danger' >First Name is required</p>}
                            {errors.fname?.type === 'minLength' && <p className='text-warning'>Firstname should have atleast 4 characters</p>}
                            {errors.fname?.type === 'maxLength' && <p className='text-warning'>Firstname should not exceed 6 characters</p>}
                        </div>

                        <div className="col-xs-1 col-6 mb-3">
                            <label htmlFor="fname" className='mb-1 mx-2 form-label'>First Name</label>
                            <input type="text" className='form-control' {...register("lname",{required:true,minLength:4,maxLength:6})} />
                            {errors.lname?.type==='required' && <p className='text-danger'>Last Name is required</p>}
                            {errors.fname?.type === 'minLength' && <p className='text-warning'>Lastname should have atleast 4 characters</p>}
                            {errors.fname?.type === 'maxLength' && <p className='text-warning'>Lastname should not exceed 6 characters</p>}
                        </div>
                    </div>
                {/* Row 2 */}
                <div className="row ">
                        {/* col 1 */}
                        <div className="col-xs-1 col-6 mb-3">
                            <label htmlFor="birthday" className='mb-1 mx-2 form-label'>Birthday</label>
                            <input type="date" className='form-control' {...register("birthday",{required:true})} />
                            {errors.birthday?.type==='required' && <p className='text-danger'>Birthday is required</p>}
                        </div>

                       {/* col 2 */}
                        <div className="col-xs-1 col-6 mb-3">
                            <label htmlFor="gender" className='mb-2 mx-2 form-label'>Gender</label> <br />
        
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="gender" id="male" className='form-check-input' {...register("gender",{required:true})}/>
                                    <label htmlFor="male" id='male' className='form-check-label mx-2'>Male</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input type="radio" name="gender" id="female" className='form-check-input' {...register("gender",{required:true})} />
                                    <label htmlFor="female" id='female' className='form-check-label mx-2'>Female</label>
                                </div>
                            {errors.gender?.type==='required'&&<p className='text-danger'>Gender is required</p>}
                        </div>
                       
                    </div> 
                
                

                {/* Row 3 Email and phone number*/}
                <div className="row mb-3">
                        <div className="col-xs-1 col-6 mb-3">
                            <label htmlFor="email" className='mb-1 mx-2 form-label'>Email</label>
                            <input type="email" className='form-control' {...register("email",{required:true})} />
                            {errors.email?.type==='required' && <p className='text-danger'>*Email is required</p>}

                        </div>

                        <div className="col-xs-1 col-6 mb-3">
                            <label htmlFor="phonenumber" className='mb-1 mx-2 form-label'>Phone Number</label>
                            <input type="tel" className='form-control' {...register("phonenumber",{required:true,minLength:10,maxLength:10})} />
                            {errors.phonenumber?.type==='required' && <p className='text-danger'>*Phone Number is required</p>}
                            {errors.phonenumber?.type==='minLength' && <p className='text-warning'>Phone Number must have 10 digits</p>}
                            {errors.phonenumber?.type==='maxLength' && <p className='text-warning'>Phone Number must have 10 digits</p>}

                        </div>
                 </div> 
                {/* Row 4 Subject */}
                 <div className="row mb-3">
                        <div className="col-12 mb-3">
                            <label htmlFor="subject" className='mb-1 mx-2 form-label'>Subject</label>
                            <select name="subject" id="subject" className='form-select' {...register("subject",{required:true})} >
                                <option value="null"> Choose Option</option>
                                <option value="java">Java</option>
                                <option value="dbms">DBMS</option>
                                <option value="cpp">CPP</option>
                                <option value="webdev">Web-Development</option>
                            </select>
                            {errors.subject?.type==='required' && <p className='text-danger'>*Subject is required</p>}

                        </div>
                 </div> 

                <button type="submit" className=' bg-primary text-center text-white'>Submit</button>
                

            </form>
        </div>
    </div>
  )
}

export default FormValidation