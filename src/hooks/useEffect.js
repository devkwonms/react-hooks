import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function App() {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(() => {
        sayHello();
    }, []);
    const reset = () => {
        setNumber(0);
        setAnumber(0);
};
return (
    <div className="App">
        <div>Hi</div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>

        <div>
            <button onClick={reset}>Reset!</button>
        </div>
    </div>
);
}
