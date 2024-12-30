import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

const DeleteButton = ({ id }) => {

  const { data, setData } = useContext(TaskContext)
  const handleClick = async (idTask, e)=>{
    try {
      await fetch(`https://taskmanagerback-production-8541.up.railway.app/api/tasks/${idTask}`,{
        method:'DELETE'
      });
      const newData = data.filter((element) => element._id !== idTask);

      setData(newData);
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <IconButton onClick={(e)=>handleClick(id,e)} aria-label="delete" size="small">
      <DeleteIcon fontSize="small" />
    </IconButton>
  )
}
 
export default DeleteButton 