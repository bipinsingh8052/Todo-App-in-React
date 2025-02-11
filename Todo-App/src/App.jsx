import Child from "./Child"
import './App.css'
import { GiNotebook } from "react-icons/gi";

import { useCallback, useState } from "react"

function App() {
  let[counter,setcounter]=useState(0);
  let [task,settask]=useState([]);

  let[input,setinput]=useState("")
  
  let alltask=useCallback(taskmaker,[task])


  const taskmaker=()=>{}

  const senddata=()=>{
    settask(values=>([...values,input]))
  }
  return (
    <>
    <div className="container">
      <div className="input">
        <h1>
          To-Do List <span><GiNotebook />
          </span>
        </h1>
        <div className="main_input">
          <input type="text"  value={input} onChange={(e)=>{setinput(e.target.value)}} />
          <button onClick={senddata}> Add</button>
        </div>
      </div>
      <div className="display">
        <Child  setfunction={alltask}  settask={task} />

      </div>
      <div className="counter">
        <h1>Counter :{counter}</h1>
        <div className="btn">
          <button onClick={()=>{setcounter(counter+1)}}>Increment</button>
          <button onClick={()=>{setcounter(counter-1)}} >Decrement</button>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
