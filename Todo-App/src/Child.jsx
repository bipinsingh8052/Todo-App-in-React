import React, { memo } from 'react'
import { MdOutlineContentCut } from "react-icons/md";
 import './App.css'
 function Child({settask,setfunction}) {
  return (
    <>
    {
        settask.map((e,index)=>{
            return(
                <div className="task" key={index}>
        <div className="option">
            
            <p>{e}</p>
        </div>
        <div className="button">
        <MdOutlineContentCut />
        </div>
    </div>
            )
        })
    }
      
    </>
  )
}
export default memo(Child)
