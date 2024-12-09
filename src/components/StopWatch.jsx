import {  useEffect, useState } from "react"

const StopWatch = ()=>{
    const [time,setTime] = useState(0);
    const [run,setRun] = useState(false);
   
    useEffect(()=> {
        let interval;
        if (run) {
             interval = setInterval(()=>{
                setTime((prev)=>prev+1)
            },1000)
        } else{
            clearInterval(interval)
        }
        return ()=> clearInterval(interval)
      },[run])

      const toggle = ()=>{
        setRun(!run)
      }
    const reset = ()=>{
        setTime(0);
        setRun(false);
    }
    return(
        <div className="container">
      <h2>Saniyeolcen</h2>
      <p>{time}s</p>
      <div className="button-container">
      <button  onClick={toggle}>{run ? "Dayandir" : "Basla"}</button>
      <button onClick={reset}>Sifirla</button>
      </div>
    </div>
    )
}
export default StopWatch;