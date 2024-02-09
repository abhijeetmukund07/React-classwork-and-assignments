import { useState } from "react"
import Child from './Child'
function Parent(){

    let[counter,setCounter] = useState(100)
    return(
        <div className="text-center text-white container p-5 mt-5 bg-primary">
            <h1>Parent</h1>
            <p className="display-3">Counter:{counter}</p>
            <Child counter={counter} setCounter={setCounter}/>
        </div>
    )
}
export default Parent