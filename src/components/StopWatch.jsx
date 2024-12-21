import {  useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { start, stop, reset, tick, recordMeasurement } from '../redux/stopWatchSlice';
// import { loadStateFromStorage } from '../redux/stopWatchSlice';

const StopWatch = ()=>{
    // const [time,setTime] = useState(0);
    // const [run,setRun] = useState(false);
    const dispatch = useDispatch();
    const {hours,minutes,seconds,isRunning,measurements} = useSelector((state)=>state.stopWatch)

    useEffect(()=> {
        let interval;
        if (isRunning) {
             interval = setInterval(()=>{
                // setTime((prev)=>prev+1)
                dispatch(tick());
            },1000)
        } else{
            clearInterval(interval)
        }
        return ()=> clearInterval(interval)
      },[isRunning,dispatch])

      // const toggle = ()=>{
      //   setRun(!run)
      // }
    // const reset = ()=>{
    //     setTime(0);
    //     setRun(false);
    // }


    const handleRecordMeasurement = () => {
        dispatch(recordMeasurement());
    
        // Ölçməni `alert()` ilə göstər
        // alert(
        //   `Ölçmə: ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
        // );
      };
    return(
        <div className="container">
      <h2>Saniyeolcen</h2>
      <p>
                {String(hours).padStart(2, '0')}:
                {String(minutes).padStart(2, '0')}:
                {String(seconds).padStart(2, '0')}
      </p>
      {/* <p>{hours} {minutes} {seconds}s</p> */}
      <div className="button-container">
      <button className="btn-stop" onClick={() => dispatch(isRunning ? stop() : start())}>
                    {isRunning ? 'Stop' : 'Start'}
      </button> 
      <button className="btn-stop" onClick={() => dispatch(reset())}>Reset</button>
      <button className="btn-stop" disabled={!isRunning} onClick={handleRecordMeasurement}>Daire</button>
      </div>
      <div className="measurements">
      {measurements.length > 0 && <h3>Results:</h3>}
                <ul>
                    {measurements.map((m, index) => (
                        <li key={index} className="result">
                            {String(m.hours).padStart(2, '0')}:
                            {String(m.minutes).padStart(2, '0')}:
                            {String(m.seconds).padStart(2, '0')}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
    )
}
export default StopWatch;




 /* Eger isteyirsizse taymer qutaran kimi basqa saytlara kecdiyi zamanda islesin 

useEffect(() => {
        const savedState = localStorage.getItem("stopwatchState");
        if (savedState) {
            const parsedState = JSON.parse(savedState);

           
            const elapsedSeconds = Math.floor((Date.now() - parsedState.timestamp) / 1000);
            const totalSeconds =
                parsedState.hours * 3600 + parsedState.minutes * 60 + parsedState.seconds + (parsedState.isRunning ? elapsedSeconds : 0);

            
            dispatch(
                loadStateFromStorage({
                    hours: Math.floor(totalSeconds / 3600),
                    minutes: Math.floor((totalSeconds % 3600) / 60),
                    seconds: totalSeconds % 60,
                    isRunning: parsedState.isRunning,
                    measurements: parsedState.measurements || [],
                })
            );
        }
    }, [dispatch]);

    
    useEffect(() => {
        const saveStateToStorage = () => {
            const stateToSave = {
                hours,
                minutes,
                seconds,
                isRunning,
                measurements,
                timestamp: Date.now(),
            };
            localStorage.setItem("stopwatchState", JSON.stringify(stateToSave));
        };

        saveStateToStorage();
    }, [hours, minutes, seconds, isRunning, measurements]);

    
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                dispatch(tick());
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, dispatch]);

*/
   