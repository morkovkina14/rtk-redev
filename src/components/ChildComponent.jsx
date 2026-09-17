import React from "react";

const ChildComponent = ({ name, counter }) => {
    return (
        <div>
            <p>Привет, {name}! Текущий счётчик: {counter}</p>
        </div>
    );
};

export default ChildComponent;
