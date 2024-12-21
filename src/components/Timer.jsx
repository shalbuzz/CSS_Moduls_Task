import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { start, stop, reset,  decrementSeconds, incrementHours, decrementHours, incrementSeconds, incrementMinutes, decrementMinutes,recordMeasurement2 } from '../redux/timerSlice';
const Timer = ()=>{
    const dispatch = useDispatch();

    // const [time,setTime] = useState(60);
    // const [run,setRun] = useState(false);
  //const {time,isRunning} = useSelector((state)=>state.timer)
  const {hours,minutes,seconds,isRunning,measurements} = useSelector((state)=>state.timer)
   
    // const incrementTime = (amount)=>{
    //     if(!run){
    //         // setTime((prev)=> prev + amount)
    //         dispatch(setTime());
    //     }

        
    // }

    // const decrementTime = (amount)=>{
    //     if(!run){
    //         // setTime((prev)=>prev - amount)
    //         dispatch(decrementTime());
    //     }
    //     if(time <= 0){
    //         setTime(0)
    //      }
    // }

    // const toggle = ()=>{
    //     setRun(!run);
    // }

//  const resetTime = ()=>{
//     setTime(0);
//  }

    useEffect(()=>{
        if(isRunning && (seconds > 0 || minutes>0 || hours>0)){
            const interval =  setInterval(()=>{
                // setTime((prev)=>prev - 1)
                dispatch(decrementSeconds());
                
            },1000)
            return ()=>clearInterval(interval);
        } else if( hours === 0 && minutes === 0 && seconds ===0 && isRunning){
            alert('Taymer bitdi')
            
            // setRun(false)
        }
    },[isRunning, dispatch, seconds, minutes, hours])

    const handleStartStop = () => {
        if (isRunning) {
            dispatch(stop());
        } else {
            dispatch(start());
        }
    };
    return(


<div className="container">
            <h2 className="title">Taymer</h2>
            <div className="timer-display">
                <div className="time-block">
                    <button className="btn" disabled={isRunning} onClick={() => dispatch(incrementHours())}>+</button>
                    {/* {isRunning ? '' :  (<button className="btn" disabled={isRunning} onClick={() => dispatch(incrementHours())}>+</button>)} */}
                    <span>{String(hours).padStart(2, '0')}</span>
                    <button className="btn" disabled={isRunning} onClick={() => dispatch(decrementHours())}>-</button>
                </div>
                <span className="separator">:</span>
                <div className="time-block">
                    <button className="btn" disabled={isRunning} onClick={() => dispatch(incrementMinutes())}>+</button>
                    <span>{String(minutes).padStart(2, '0')}</span>
                    <button className="btn" disabled={isRunning} onClick={() => dispatch(decrementMinutes())}>-</button>
                </div>
                <span className="separator">:</span>
                <div className="time-block">
                    <button className="btn" disabled={isRunning} onClick={() => dispatch(incrementSeconds())}>+</button>
                    <span>{String(seconds).padStart(2, '0')}</span>
                    <button className="btn" disabled={isRunning} onClick={() => dispatch(decrementSeconds())}>-</button>
                </div>
            </div>
            <div className="controls">
                <button className="btn-stop" onClick={handleStartStop}>
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button className="btn-stop" onClick={() => dispatch(reset())}>Reset</button>
                <button className="btn-stop" disabled={!isRunning} onClick={() => dispatch(recordMeasurement2())}>Recent</button>
            </div>
            <div className="measurements">
                {measurements.length > 0 && (
                    <div className="measurements-list">
                        <h3>Son Ölçmələr:</h3>
                        <ul>
                            {measurements.map((measurement, index) => (
                                <li key={index}>
                                    {String(measurement.hours).padStart(2, '0')}:
                                    {String(measurement.minutes).padStart(2, '0')}:
                                    {String(measurement.seconds).padStart(2, '0')}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Timer;