import { useEffect, useState } from "react"

const Clock = ()=>{
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=> clearInterval(timer);
    })

    return(
        <div className="container">
      <h2>Clock</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>

    )
}
export default Clock;