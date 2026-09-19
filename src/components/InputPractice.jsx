import React from "react"

const InputPractice=()=>{

const handleChange=(e)=>{
console.log("e.target.value:", e.target.value)
}

const handleFocus=(e)=>{
console.log("Поле получило фокус")
}

const handleBlur=(e)=>{
console.log("Поле потеряло фокус")
}

const handleKeyDown=(e)=>{
 if(e.key==="Enter"){
    console.log("Нажат Enter")
 }
}

    return(
    <div>
        <input type="text" 
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}/>
    </div>
    )
}

export default InputPractice