import React from 'react'
import { useState } from 'react'
function Form() {

    let [username, setUsername] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [gender, setGender] = useState("")

    function handleUsername(event){
        setUsername(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

    function handleGender(event){
        setGender(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        console.log({username,email,password,gender})
    }


  return (
    <div>
        <h1 className="text-center text-primary">Form Demo</h1>
        <div className="container form">
        <form className='w-75 bg-light mx-auto mt-5' onSubmit={handleFormSubmit}>
            <div className="mb-3 username">
                <label htmlFor="Username" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' onChange={handleUsername}/>
            </div>

            <div className="email mb-3">
                <label htmlFor="email" className='form-label'>E-mail</label>
                <input type="email" className='form-control' onChange={handleEmail}/>
            </div>

            <div className="password mb-3">
            <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control' autoComplete='on' onChange={handlePassword} />
            </div>

            <div className="gender-select mb-3">

                <input type="radio" name="gender" id="male" className='form-check-input' onChange={handleGender} />
                <label htmlFor="male" className='form-label'>Male</label>
                <br />
                <input type="radio" name="gender" id="female" className='form-check-input' onChange={handleGender}/>
                <label htmlFor="female" className='form-label'>Female</label>
            </div>
            
            <div className="submit-button">
                <button className='btn btn-success mb-4 '>Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Form