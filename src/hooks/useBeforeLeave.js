import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
    return;
    }
    const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
        onBefore();
    }
    };
    useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

// sample

// export default function App() {
//     const begForLife = () => console.log("Pls dont leave");
//     useBeforeLeave(begForLife);
//     return (
//     <div className="App">
//         <h1>Hello</h1>
//     </div>
//     );
// }
