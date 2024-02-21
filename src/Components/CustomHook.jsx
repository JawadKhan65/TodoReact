import React, { useState } from 'react'
import useConsoleLog from './useConsoleLog'

const CustomHook = () => {
    const [count, setCount] = useState(0)
    useConsoleLog(count)
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Plus 1</button>
        </div>
    );
}

export default CustomHook

// another custom hook

// import { useState, useEffect, useRef } from "react";
// export default function App() {
//     const [day, setDay] = useState("Monday");
//     const prevDay = usePrevious(day);

//     const getNextDay = () => {
//         if (day === "Monday") {
//             setDay("Tuesday")
//         } else if (day === "Tuesday") {
//             setDay("Wednesday")
//         } else if (day === "Wednesday") {
//             setDay("Thursday")
//         } else if (day === "Thursday") {
//             setDay("Friday")
//         } else if (day === "Friday") {
//             setDay("Monday")
//         }
//     }
//     return (
//         <div style={{ padding: "40px" }}>
//             <h1>
//                 Today is: {day}<br />
//                 {
//                     prevDay && (
//                         <span>Previous work day was: {prevDay}</span>
//                     )
//                 }
//             </h1>
//             <button onClick={getNextDay}>
//                 Get next day
//             </button>
//         </div>
//     );
// }

// function usePrevious(val) {
//     const prevRef = useRef(null)
//     useEffect(() => {
//         prevRef.current = val

//     }, [val])
//     return prevRef.current
// }