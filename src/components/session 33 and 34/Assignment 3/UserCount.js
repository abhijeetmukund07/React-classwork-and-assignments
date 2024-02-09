import { useState } from "react"

function UserCount(props){

    let[counter,setCounter]=useState(1)
    function changeCounter(){
        setCounter(counter+1)
    }
    return(
        <div>
            <h1 className="text-center text-primary mb-5 mt-5">{counter}</h1>
        </div>
    )
}
export default UserCount