import React, { memo } from 'react'
import { MdOutlineContentCut } from "react-icons/md";
 import './App.css'
 import { IoIosCopy } from "react-icons/io";
 function Child({task,alltask ,setindex}) {
    console.log("normal")
  return (
    <>
    {
      task.length===0?" ":(  task.map((e,index)=>{
        return(
            <div className="task" key={index}>
    <div className="option">
        
        <p>{e}</p>
    </div>
    <div className="button">
    <  MdOutlineContentCut onClick={()=>{setindex(index)}}  />
    <IoIosCopy onClick={alltask} />
    </div>
</div>
        )
    }))
    }
      
    </>
  )
}
export default memo(Child)
