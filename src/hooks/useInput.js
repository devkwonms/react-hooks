import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export const useInput = (initialValue, validator) => {
const [value, setValue] = useState(initialValue);
const onChange = (event) => {
    const {
    target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
    willUpdate = validator(value);
    }
    if (willUpdate) {
    setValue(value);
    }
};
return { value, onChange };
};
// sample
// export default function App() {
//   // const maxLen = (value) => value.length <= 10;
// const maxLen = (value) => !value.includes("@");
// const name = useInput("minseo", maxLen);
// return (
//     <div className="App">
//     <h1>Hello</h1>
//     <input placeholder="Name" {...name} />
//     </div>
// );
// }
