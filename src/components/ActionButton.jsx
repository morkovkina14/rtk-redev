import React from "react"

const ActionButton=({text, onClick})=>{


    return(
        <div>
          <button onClick={onClick}>
           {text}
          </button>
        </div>
    )
}

export default ActionButton