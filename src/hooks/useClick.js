import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
    if (typeof onClick !== "function") {
        return;
    }
    if (element.current) {
        element.current.addEventListener("click", onClick);
    }
    return () => {
        if (element.current) {
        element.current.removeEventListener("click", onClick);
        }
    };
    }, []);
    return typeof onClick !== "function" ? undefined : element;
};
const sayHello = () => {
    console.log("say hello");
};

// sample

// export default function App() {
//     const title = useClick(sayHello);
// return (
//     <div className="App">
//         <h1 ref={title}>Hi</h1>
//     </div>
//     );
// }
