import React, {useState} from "react"

const ColorText=()=>{
    const[color, setColor]=useState("red")
    const handleClick=()=>{
        setColor(color==="red"?"green":"red")
    }

    const style={color:color}

    return(
        <div>
            <p style={style}>Разбираем работу useState</p>
            <button onClick={handleClick}>Меняем цвет на {color==="red"?"green":"red"}</button>
        </div>
    )
}


export default ColorText