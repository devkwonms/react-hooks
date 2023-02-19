import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

export const usePreventLeave = () => {
    const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
};

// sample

// export default function App() {
//     const { enablePrevent: a, disablePrevent: b } = usePreventLeave();
//     return (
//     <div className="App">
//         <button onClick={a}>Protect</button>
//         <button onClick={b}>Unprotect</button>
//     </div>
//     );
// }
