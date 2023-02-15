import { useState } from "react";

export default function CounterList() {
  let initCounters = [0, 0, 0];
  const [counters, setCounters] = useState(initCounters);
  function handleIncrClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters)
  }
  return (
    <ul>
      {counters.map((counter,i)=>(<li key={i}>{counter}<button onClick={()=>{handleIncrClick(i)}}>+1</button></li>))}
    </ul>
  )
}

