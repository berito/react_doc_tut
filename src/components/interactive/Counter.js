import { useState } from "react";
export default function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <h1>{number}</h1>
            {/* <button onClick={() => {
                setNumber(number + 1)
                setNumber(number + 1)
                setNumber(number + 1)
            }} >+3</button> */}
            {/* <button onClick={() => {
                setNumber(number + 5);
                alert(number);
            }}>+5</button> */}
            <button
                onClick={() => {
                    setNumber(number + 5);
                    setTimeout(() => {
                        alert(number);
                    }, 3000);
                }}
            >
                +5
            </button>
        </>
    );
}
export function CounterQueue() {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    setNumber(n=>n + 1);
                    setNumber(n=>n + 1);
                    setNumber(n=>n + 1);
                }}
            >+3</button>
        </div>
    );
}
