import React, { useState } from 'react'
import DeleteButton from './DeleteButton.jsx'
import EditButton from './EditButton.jsx'
import { Link } from 'react-router-dom'

const Task = ({title, createdAt, id, completed}) => {

    const [pending, setPending] = useState(completed);

    const fecha = new Date(createdAt);
    const fechaCorta = fecha.toLocaleDateString(); 
    
    const handleChecked = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`https://taskmanagerback-production-8541.up.railway.app/api/tasks/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              completed: !pending, 
            }),
          });
    
          if (!response.ok) {
            throw new Error("Failed to update the task.");
          }
    
          const updatedTask = await response.json();
          setPending(updatedTask.completed); 
        } catch (err) {
          console.error("Error updating the task:", err);
        }
      };

  return (
    <div id='task' className='border-2 px-1 py-1 items-center mb-2'>
            <div className=''>📅 {fechaCorta}</div>
            <div className='flex'>
                <div className='w-5/6'>
                    <input onChange={handleChecked} checked={pending ? true : false} className='inline' type="checkbox" name="" id="" />
                    <span className='w-5/6'> {title} </span>  
                </div> 
                
                
                <div className='w-1/6 flex justify-end'>
                    <DeleteButton id={id}/>
                    <Link to={`/edit/${id}`}><EditButton /></Link>
                </div>
            </div>
            
    </div>
  )
}

export default Task


