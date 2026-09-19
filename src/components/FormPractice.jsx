import React from "react"

const FormPractice=()=>{

    const handleSubmit=(e)=>{
 e.preventDefault();
 console.log("Форма отправлена");
 console.log("e.currentTarget:", e.currentTarget )
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button type="submit">Отправить</button>
            </form>
        </div>
    )
}


export default FormPractice