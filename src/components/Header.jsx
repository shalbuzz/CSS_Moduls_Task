import { Link } from "react-router-dom";
import './header.css';
const Header = ()=>{
    return(
        <nav>
        <ul>
          <li><Link to='/clock' className={({ isActive }) => (isActive ? "active" : "")}>Clock</Link></li>
          <li><Link to='/stopwatch' className={({ isActive }) => (isActive ? "active" : "")}>StopWatch</Link></li>
          <li><Link to='/timer' className={({ isActive }) => (isActive ? "active" : "")}>Timer</Link></li>
        </ul>
      </nav>
    )
}
export default Header;