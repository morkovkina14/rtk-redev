import React, {useState} from "react"

const User=()=>{
const [user, setUser] = useState({
  name: "Иван",
  age: 25,
  isActive: true,
});

const increment=()=>{
    setUser(prevUser=>({...prevUser, age:prevUser.age+1}))
}

const activ=()=>{
    setUser(prevUser=>({...prevUser, isActive:!prevUser.isActive}))
}
const firstName=()=>{
    setUser(prevUser=>({...prevUser, name: prevUser.name==="Иван"?"Ольга":"Иван"}))
}
return(
    <div>
        <h1>Профиль пользователя</h1>
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <p>Активен: {user.isActive ? "Да" : "Нет"}</p>
        <button onClick={firstName}>Сменить имя</button>
        <button onClick={increment}>Увеличить возраст на 1</button>
        <button onClick={activ}>Переключить активность</button>
    </div>
)

}

export default User