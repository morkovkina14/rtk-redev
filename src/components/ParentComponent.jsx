import React, { useState } from "react";
import ChildComponent from "./ChildComponent"; 
homework-08-02
import SiblingComponent from "./SiblingComponent"; 

import SiblingComponent from "./SiblingComponent";
 main

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(counter => counter + 1);
    };

    const reset = () => {
        setCounter(0);
    };

    const random = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setCounter(randomNumber);
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter => counter - 1);
        }
    };

    return (
        <div>
            <p>Счётчик: {counter}</p>
            <button onClick={increment}>Увеличить на 1</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={random}>Случайное значение</button>
            <button onClick={decrement}>Уменьшить на 1</button>
 homework-08-02


 main
            <ChildComponent name="Ola" counter={counter} />
            <SiblingComponent />
        </div>
    );
};

export default ParentComponent;
