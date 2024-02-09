import './statedemo.css'
import {useState} from "react";
function StateDemo(){

    let [counter, setCounter] = useState(1)
    let [technology,setTechnology] = useState("JavaScript")
    let [person,setPerson] = useState({name: "Abhi", rollno: 44,id:1211,email:"abhi@abhi.com"})
    let [skills,setSkills] = useState(["Js","CSS","HTML","Bootstrap"])

    function incrementCounter(){
        setCounter(counter+1)
    }

    function decrementCounter(){
        setCounter(counter-1)
    }

    function changeTechnology(){
        if(technology==='JavaScript')
            setTechnology("React")
        else
            setTechnology("JavaScript")
    }

    function changePerson(){
        setPerson({...person,name:"Sathvik",rollno:18})
    }

    function changeSkillSet(){
        setSkills(["C","CPP","Java","Python","NodeJS"])
    }

    function deleteProperty(){
        let copyPerson = {...person} 
        delete copyPerson.email
        setPerson(copyPerson)

    }

    return(
        <div className='text-center'>
            <h1 className='text-primary display-3'>useState Hook Demo</h1>

            <p className='text-secondary display-2'>{counter}</p>
            <button className="btn btn-success" onClick={incrementCounter}>Increment</button>
            <button className="btn " id="decrement-button" onClick={decrementCounter}>Decrement</button>

            <p className="display-2 p-4">{technology}</p>
            <button className="btn btn-primary" onClick={changeTechnology}>Change Technology</button>

            <p className='display-5 m-4 text-info'>{person.name} {person.rollno} <br/>  {person.id} <br /> {person.email}</p>
            <button className="btn btn-secondary text-white mx-4" onClick={changePerson}>Change Person</button>
            <button className='btn btn-danger' onClick={deleteProperty}>Delete Email</button>

            {
                skills.map( (skill)=>{
                   return <p className='display-4 key={skill}' text-success>{skill}</p>
                } )
            }

        
            <button className='btn btn-success' onClick={changeSkillSet}>Change Skills</button>
        </div>
    )
}
export default StateDemo