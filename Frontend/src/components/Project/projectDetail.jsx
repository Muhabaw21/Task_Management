import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStarOfLife } from 'react-icons/fa';
import axios from 'axios'
import './projectDetail.css';
import { Pagination } from 'antd';
import Navigation from '../Navigation/Navigation';

const ProjectDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/users/projects/${id}`);
        const data = await response.json();
        console.log(data);
        setItem(data.project);
        const tasksResponse = await fetch(`http://localhost:7000/api/tasks/tasks`);
        const tasksData = await tasksResponse.json();
        console.log(tasksData);
        const associatedTasks = tasksData.tasks.filter(task => task.projectId === parseInt(id));
        setTasks(associatedTasks);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [id]);
  
  const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
}


  
  const handleItemChange = (event) => {
   console.log(item); // log the item variable before updating it
    console.log(`Event:  ${event.target.value}`); // log the new value entered by the user
    setItem({
      [event.target.name]: event.target.value
    });
    console.log(`Handle Change :    item`); // log the item variable after updating it
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the item data to the API endpoint
   // console.log(item);
  };
  return (
    <div>

     <Navigation path={`/projects/${id}`} />
     <div className='main_content'>
    
    {item ? (
      <div className='main-content'>
      
              <div className="allForms1">
             
                <label className="addHeader">Project Detail</label>
                <div className="formDiv1">
                <div className="input">
<label>
  Project Name{' '}
  <FaStarOfLife className="icon" size="0.5rem" color="red" />
</label>
<input
  name="projectName"
  type="text"
  value={item?.projectName}
  onChange={(e)=>e.target.value}
/>
</div>
      
                <div className="input">
<label>
  Project description{' '}

</label>
<input
  name="desc"
  type="text"
  value={item?.desc}
  onChange={(e)=>e.target.value}
  readOnly
/>
</div>
                <div className="input">
<label>
  Start Date{' '}

</label>
<input
  name="startDate"
  type="text"
  value={item?.startDate}
  onChange={(e)=>e.target.value}
  readOnly
/>
</div>
                <div className="input">
<label>
  Start end{' '}

</label>
<input
  name="endDate"
  type="text"
  value={item?.endDate}
  onChange={(e)=>e.target.value}
  readOnly
/>
</div>
                <div className="input">
<label>
  Status{' '}

</label>
<input
  name="status"
  type="text"
  value={item?.status}
  onChange={(e)=>e.target.value}
  readOnly
/>
</div>
                <div className="input">
<label>
  Project Manager{' '}

</label>
<input
  name="manager"
  type="text"
  value={item?.manager}
  onChange={(e)=>e.target.value}
  readOnly
/>
</div>
                </div>
              </div>
          
      </div>
    ) : (
      ''
    )}
    <div>
     <p>Total Tasks</p>
                <div className="table_container">
                  <table className="task_table">
                      <thead>
                          <tr>
                              <th>Task Name</th>
                              <th>Task Description</th>
                              <th>Due Date</th>                                     
                          </tr>
                      </thead>
                      <tbody>
                         {
                      tasks.map((task)=>(
                        <tr className='active_row' key = {task.id}>
                           <td>{task.taskName}</td>
                           <td>{task.taskDescription}</td>   
                           <td>{task.dueDate}</td>                
                         </tr>
                      ))
                         }
                      </tbody>
                  </table>
                </div>                  
           </div>
           <div className="page">
        <Pagination style={{ overflowX: 'auto' }}
          onChange={handlePageChange}
          pageSize={pageSize}
          current={currentPage}
          total={totalTasks}
          showQuickJumper
          showSizeChanger
          onShowSizeChange={(current, size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
        />
      </div>
     </div>
     
    </div>
  );
  
};

export default ProjectDetail;
