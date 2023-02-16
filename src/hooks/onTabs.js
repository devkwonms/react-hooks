import React, { useState } from "react";
import ReactDOM from "react-dom";

const content = [
{
    tab: "Section 1",
    content: "I'm the content of the Section 1"
},
{
    tab: "Section 2",
    content: "I'm the content of the Section 2"
}
];

export const useTab = (initialTab, allTabs) => {
const [currentIndex, setCurrentIndex] = useState(initialTab);
if (!allTabs || !Array.isArray(allTabs)) {
    return;
}

return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
};
};

// sample

// export default function App() {
// const { currentItem, changeItem } = useTab(0, content);
// return (
//     <div className="App">
//     {content.map((section, index) => (
//         <button key={index} onClick={() => changeItem(index)}>
//         {section.tab}
//         </button>
//     ))}
//     <div>{currentItem.content}</div>
//     </div>
// );
// }