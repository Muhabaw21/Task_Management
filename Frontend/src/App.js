
import Registration from "./components/Registration/Registration";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Student from "./components/Student/Student";
import Teacher from "./components/Teacher/Teacher";
import Login from "./components/Login/Login";
import Home from "./components/Dashboard/Home";
function App() {
  return (
    <Router>
  
        <div >
          <Routes>
            <Route path="/"  element = {<Login/>}></Route> 
            <Route path="/home"  element = {<Home/>}></Route> 
            <Route path="/registration" element = { <Registration/>}></Route>
            <Route path="/student" element = { <Student/>}></Route>
            <Route path="/teacher" element = { <Teacher/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
