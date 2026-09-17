import React, { useState } from "react";

const SiblingComponent = () => {
    const [text, setText] = useState("");
    
 homework-08-02


 main
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
         setText("REDEV");
    };

    return (
        <div>
            <p>Текущий текст: {text}</p>
            <input type="text" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Изменить текст</button>
        </div>
    );
};

export default SiblingComponent;
