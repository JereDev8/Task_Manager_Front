import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';


const CreateTask = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState()

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        
        const inputTitle = document.getElementById('create_task');
        if(inputTitle.value == ""){
          setError({message:'Title must have at least one character'});
          return;
        }

        fetch('https://taskmanagerback-production-8541.up.railway.app/api/tasks', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:title,
                description: description
            })
        })
        .then((res)=>{
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className='flex justify-center items-center h-lvh'>
        <div className='bg-slate-100 min-h-48 w-full lg:w-1/2 lg:rounded-md'>
            <div className='flex justify-center items-center'>
                <Link to='/' className='w-1/6'> <ArrowBackIcon fontSize="large"/> </Link>
                <h1 className='text-2xl text-center font-normal m-4 w-4/6'>✨ Crear Tarea</h1>
                <div className='w-1/6'></div>
            </div>
            
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center' method="post">
                <label htmlFor="">Titulo</label>
                <input onChange={(e)=>setTitle(e.target.value)} id='create_task' className='border rounded-md px-2 py-1 w-5/6' type="text" />
                <label htmlFor="">Descripcion</label>
                <textarea onChange={(e)=>setDescription(e.target.value)} className='mt-2 mb-4 border rounded-md px-2 py-1 w-5/6 h-40' name="" id=""></textarea>
                <button type='submit' className='border rounded-md bg-cyan-300 py-1 px-6 mb-3'>Crear</button>
                {
                  error && <p className='text-red-600'>{error.message}</p>
                }
            </form>
        </div>
    </div>
  )
}

export default CreateTask