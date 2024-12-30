import './App.css'
import { Link } from 'react-router-dom'
import Task from './components/Task.jsx'
import { useContext, useEffect, useState } from 'react'
import { TaskContext } from './context/TaskContext.jsx';

function App() {
  const { data, setData } = useContext(TaskContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reinicia el estado de error
    try {
      const response = await fetch("https://taskmanagerback-production-8541.up.railway.app/api/tasks");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCompleted = async () => {
    setLoading(true);
    setError(null); // Reinicia el estado de error
    try {
      const response = await fetch("https://taskmanagerback-production-8541.up.railway.app/api/tasks");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const result = await response.json();
      const newData = result.filter((task) => task.completed === true);
      setData(newData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getPending = async () => {
    setLoading(true);
    setError(null); // Reinicia el estado de error
    try {
      const response = await fetch("https://taskmanagerback-production-8541.up.railway.app/api/tasks");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const result = await response.json();
      const newData = result.filter((task) => task.completed === false);
      setData(newData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-100 min-h-48 w-full lg:w-1/2 lg:rounded-md px-6">
        <h1 className="text-2xl text-center font-normal m-4">✨ Mi Lista de Tareas</h1>
        <div className="input-group flex justify-center">
          <Link to="/create" className="add-btn border py-1 px-2 bg-blue-500 text-white rounded-md border-none hover:bg-blue-700 duration-100">Crear Tarea</Link>
        </div>

        {/* Estado de carga */}
        {loading && (
          <div className="flex justify-center items-center my-4">
            <span className="text-gray-500">Cargando...</span>
          </div>
        )}

        {/* Estado de error */}
        {error && (
          <div className="flex justify-center items-center my-4 text-red-500">
            <span>Error: {error}</span>
          </div>
        )}

        {/* Contenedor de tareas */}
        {!loading && !error && (
          <div id="container-tasks" className="my-4 overflow-y-auto max-h-96 bg-white rounded-md shadow-md p-4">
            {data && data.length > 0 ? (
              data.map((task) => (
                <Task
                  key={task._id}
                  title={task.title}
                  createdAt={task.createdAt}
                  id={task._id}
                  completed={task.completed}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">No hay tareas disponibles.</div>
            )}
          </div>
        )}

        {/* Botones para filtrar tareas */}
        <div className="flex justify-evenly my-4">
          <button
            onClick={fetchData}
            className="add-btn py-1 px-2 text-gray-500 duration-100 hover:text-gray-800"
          >
            Todos
          </button>
          <button
            onClick={getPending}
            className="add-btn py-1 px-2 text-gray-500 duration-100 hover:text-gray-800"
          >
            Pendientes
          </button>
          <button
            onClick={getCompleted}
            className="add-btn py-1 px-2 text-gray-500 duration-100 hover:text-gray-800"
          >
            Completados
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;