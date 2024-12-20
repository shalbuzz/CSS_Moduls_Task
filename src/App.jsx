import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TimerPage from "./pages/TimerPage";
import StopWatchPage from "./pages/StopWatchPage";
import ClockPage from "./pages/ClockPage";
import './App.css';
const App = ()=>{
  return(
    <div className="container1">
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<ClockPage/>}></Route>
      <Route path="/stopWatch" element={<StopWatchPage/>}></Route>
      <Route path="/timer" element={<TimerPage/>}></Route>
    </Routes>
  </Router>
    </div>
  )
}
export default App;