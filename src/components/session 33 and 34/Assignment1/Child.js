import { useState } from "react";

function Child(props){
    return(
        <div className="container bg-warning p-4">
            <h1>Child</h1>
            <button className="btn btn-success m-3 " onClick={()=>{props.setCounter(props.counter+1)}}>Increment</button>
            <button className="btn btn-danger m-3 " onClick={()=>{props.setCounter(props.counter-1)}}>Decrement</button>

        </div>
    )
}

export default Child