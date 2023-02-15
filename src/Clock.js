import { useState } from "react"
function Timer({ color, time }) {
    return (
        <h1 style={{ color: color }}>{time}</h1>
    )
}

export default function Clock() {
    const [count, setTimer] = useState()
    const options = ['rebeccapurple', 'lightcolar', 'midnightblue']
    setTimer(<Timer/>,1000)

}