import React, {useState} from "react"

const ToggleText=()=>{
    const [text, setText]= useState(true)
    
    const handleClick=()=>{
    setText(text=>!text)
    }
    return(
        <div> 
            <button onClick={handleClick}>{text ? "Скрыть" : "Показать"}</button>
            {text && <p>Учу React</p>}
        </div>
    )
}

export default ToggleText