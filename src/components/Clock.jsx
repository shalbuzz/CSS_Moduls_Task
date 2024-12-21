import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentTime } from '../redux/clockSlice';

const Clock = ()=>{
    // const [time,setTime] = useState(new Date());
    const dispatch = useDispatch();
    const currentTime =new Date( useSelector((state)=>state.clock.currentTime))

    useEffect(()=>{
        const timer = setInterval(()=>{
          dispatch(updateCurrentTime());
        },1000)
        return ()=> clearInterval(timer);
    },[dispatch]);

    return(
        <div className="container">
      <h2>Clock</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>

    )
}
export default Clock;

