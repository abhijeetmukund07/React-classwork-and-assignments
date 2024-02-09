import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function ApiCallTest() {

    let[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/users")
        .then((res)=>res.json())
        .then(prods=>setProducts(prods))
        .catch(err=>console.log(err))
    },[])

  return (
    <div>
        {
            products.map((userObj)=>(
                <h6> {userObj.id} </h6>
            ))
        }
    </div>
  )
} 

export default ApiCallTest