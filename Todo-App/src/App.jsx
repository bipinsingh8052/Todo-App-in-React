import Child from "./Child"
import './App.css'
import { GiNotebook } from "react-icons/gi";

import { useCallback, useEffect, useMemo, useState } from "react"

function App() {
  let[counter,setcounter]=useState(0);
  let [task,settask]=useState([]);
  let[input,setinput]=useState("")
  let [index,setindex]=useState(0);


  const senddata=()=>{
    settask(values=>([...values,input]))
  }
  let memo =useMemo(()=>{
    settask(task.filter((_, i) => i !== index));
  },[index])


  // console.log(index,'indexno: deleted')


  let alltask=useCallback(senddata,[task])
  useEffect(()=>{ console.log(memo)},[task])
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
        <Child  task={task}  alltask={alltask}  setindex={setindex}/>

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
