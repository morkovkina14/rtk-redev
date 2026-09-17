import React, {useState} from "react"

const LiveInput=()=>{
    const [text, setText]=useState("")
    
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    return(
        <div>
            <label> Введите текст:
            <input type="text" value={text} onChange={handleChange}/>
            </label>
            <p>{text}</p>
        </div>
    )
}

export default LiveInput