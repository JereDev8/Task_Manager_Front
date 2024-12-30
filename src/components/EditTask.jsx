import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from 'react';

const EditTask = () => {
    const { id } = useParams()
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [error, setError] = useState()

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://taskmanagerback-production-8541.up.railway.app/api/tasks/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };

    fetchData();
    console.log(data)
  }, []);


  const handleTitleChange = (e)=>{
    const {value} = e.target;
    setData({...data, title:value})
  }

  const handleDescriptionChange = (e)=>{
    const {value} = e.target;
    setData({...data, description:value})
  }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const inputEditTitle = document.getElementById('edit_task');
        if(inputEditTitle.value == ""){
          setError({message:'Title must have at least one character'});
          return;
        }
        fetch(`https://taskmanagerback-production-8541.up.railway.app/api/tasks/${id}`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
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
                <h1 className='text-2xl text-center font-normal m-4 w-4/6'>✨ Editar Tarea</h1>
                <div className='w-1/6'></div>
            </div>
            
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center' method="post">
                <label htmlFor="">Titulo</label>
                <input id='edit_task' onChange={handleTitleChange} value={data.title} className='border rounded-md px-2 py-1 w-5/6' type="text" />
                <label htmlFor="">Descripcion</label>
                <textarea onChange={handleDescriptionChange} value={data.description} className='mt-2 mb-4 border rounded-md px-2 py-1 w-5/6 h-40' name="" id=""></textarea>
                <button type='submit' className='border rounded-md bg-cyan-300 py-1 px-6 mb-3'>Editar</button>
                {
                  error && <p className='text-red-600'>{error.message}</p>
                }
            </form>
        </div>
    </div>
  )
}

export default EditTask