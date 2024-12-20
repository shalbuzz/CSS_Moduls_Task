import { Link } from "react-router-dom";
import './header.css';
const Header = ()=>{
    return(
        <nav>
        <ul>
          <li><Link to='/' className="active">Clock</Link></li>
          <li><Link to='/stopwatch' className="active">StopWatch</Link></li>
          <li><Link to='/timer' className="active">Timer</Link></li>
        </ul>
      </nav>
    )
}
export default Header;