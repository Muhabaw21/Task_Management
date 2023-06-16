import React, { useState } from 'react'
import { FaStarOfLife } from 'react-icons/fa';
import './projectInfo.css'

import 'animate.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation'

const ProjectInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(null);
  const [email,setEmail] = useState("");
  const [emailError,setEmailError] = useState(null);
  const [password,setPassword] = useState("");
  const [passwordError,setPasswordError] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState("");
  const [confirmPasswordError,setConfirmPasswordError] = useState(null);
  const [dept, setDepartmentName] = useState("");
  const [departmentNameError, setDepartmentNameError] = useState(null);
  const handlePojectName = (event)=>{
    setFirstName(event.target.value);
    setNameError("");
  }
  const handleTeacher = (event)=>{
    
    event.preventDefault();
    setSelectedTeacher(event.target.value);
    
  }
  const handleStudent = (event)=>{
    event.preventDefault();
    setSelectedStudent(event.target.value);
  }
  const handleLastName = (event)=>{
    setLastName(event.target.value);
    setLastNameError("")
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
    setEmailError("");
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError("");
  }
  const handleConfirmPassword = (e)=>{
    setConfirmPassword(e.target.value)
    setConfirmPasswordError("");
  }
  const handleDepartment = (e)=>{
    setDepartmentName(e.target.value)
    setDepartmentNameError("");
  }
const[pop, setPop] = useState(false);
const[close, setClose] = useState(false);
const handleClickOpen = ()=>{
  setPop(!pop);
}
const closePopup = ()=>{
  setPop(false);
}
  return (
    <div >
        <Navigation path="/projects" title="ProjectInfo"></Navigation>
       <div className='main_content'>
           <div className='project_content'>
               <p>TOTAL PROJECTS</p>
                <table className="project_table">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Manager</th>                          
                            <th>Add Task</th>                          
                        </tr>
                    </thead>
                    <tbody>
                      <tr className='active_row'>
                        <td>Cargo</td>
                        <td>vehicle</td>
                        <td>driver</td>
                        <td>Java</td>
                        <td>Python</td>
                        <td>Python</td>
                        <td><Link to = '#'><button onClick={
                            handleClickOpen
                          }>Add Task</button></Link></td>
                       
                        
                      </tr>
                      <tr>
                        <td>Cargo</td>
                        <td>vehicle</td>
                        <td>driver</td>
                        <td>Java</td>
                        <td>Python</td>
                        <td>Python</td>
                        <td><Link to = '#'><button onClick={
                            handleClickOpen
                          }>Add Task</button></Link></td>
                      </tr>
                      
                    
                    </tbody>
                </table>
                    <form action="">
                    {pop?

                     <div>
                 
                       <div className="popup">
                  
                         <div className='animate__animated animate__slideInDown'>                                                        
                                                        <div className="popupInner">

                                                            <div className= "allForms1">

                                                                <button className="closeBtn" onClick={closePopup}>X</button>
                                                                <lable className= "addHeader">Add Task</lable>

                                                                <div className="formDiv1">
                                                                    <div className="input">
                                                                        <lable>Task Name <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></lable>
                                                                        <input name='taskName' type="text"
                                                                           
                                                                            placeholder='Enter Task Name'
                                                                          ></input>
                                                                       
                                                                    </div>

                                                                    <div className="input">
                                                                    <lable>Task Name <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></lable>
                                                                        <input name='taskName' type="text"
                                                                           
                                                                            placeholder='Enter Task Name'
                                                                          ></input>
                                                                       
                                                                    </div>

                                                                    <div className="input">
                                                                        <lable>Task Name <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></lable>
                                                                        <input name='taskName' type="text"
                                                                           
                                                                            placeholder='Enter Task Name'
                                                                          ></input>
                                                                       
                                                                    </div>

                                                                    <div className="input">
                                                                        <lable>Task Name <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></lable>
                                                                        <input name='taskName' type="text"
                                                                           
                                                                            placeholder='Enter Task Name'
                                                                          ></input>
                                                                       
                                                                    </div>

                                                                  

                                                                </div>
                                                                <div className="addButton">
                                                                    <button>Submit </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        </div> 
                         
                        
                       </div>
      


  
                      </div>
                    :""}
                    </form>
           </div>
             
        </div>
    </div>
  )
}

export default ProjectInfo
