
import Registration from "./components/Registration/Registration";
import Project from "./components/Project/ProjectRegistration";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Student from "./components/Student/Student";
import Teacher from "./components/Teacher/Teacher";
import Login from "./components/Login/Login";
import Home from "./components/Dashboard/Home";
import ProjectInfo from "./components/Project/ProjectInfo";
function App() {
  return (
    <Router>
  
        <div >
          <Routes>
            <Route path="/"  element = {<Login/>}></Route> 
            <Route path="/home"  element = {<Home/>}></Route> 
            <Route path="/registration" element = { <Registration/>}></Route>
            <Route path="/project" element = { <Project/>}></Route>
            <Route path="/projects" element = { <ProjectInfo/>}></Route>
            <Route path="/student" element = { <Student/>}></Route>
            <Route path="/teacher" element = { <Teacher/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
