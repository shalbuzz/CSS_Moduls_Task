import { useEffect, useState } from "react"

const Timer = ()=>{

    const [time,setTime] = useState(60);
    const [run,setRun] = useState(false);

    const incrementTime = (amount)=>{
        if(!run){
            setTime((prev)=> prev + amount)
        }
    }

    const toggle = ()=>{
        setRun(!run);
    }



    useEffect(()=>{
        if(run&&time>0){
            const interval =  setInterval(()=>{
                setTime((prev)=>prev - 1)
            },1000)
            return ()=>clearInterval(interval);
        } else if( time === 0&& run){
            alert('Taymer bitdi')
            setRun(false)
        }
    },[run,time])
    return(
        <div className="container">
      <h2>Taymer</h2>
      <p>{time}s</p>
      {!run && (
        <div>
          <button onClick={() => incrementTime(10)}>+10s</button>
          <button onClick={() => incrementTime(-10)}>-10s</button>
        </div>
      )}
      <button onClick={toggle}>{run ? "Dayandir" : "Başla"}</button>
    </div>
    )
}
export default Timer;