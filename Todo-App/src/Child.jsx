import React from 'react'
import { MdOutlineContentCut } from "react-icons/md";

export default function Child() {
  return (
    <>
    <div className="task">
        <div className="option">
            <input type="checkbox"  />
            <p>Hellow brother</p>
        </div>
        <div className="button">
        <MdOutlineContentCut />
        </div>
    </div>
      
    </>
  )
}
