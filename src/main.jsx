import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateTask from './components/CreateTask.jsx'
import './index.css'
import App from './App.jsx'
import EditTask from './components/EditTask.jsx';
import { TaskProvider } from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/create' element={<CreateTask/>}/>
            <Route path='/edit/:id' element={<EditTask/>}/>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  </StrictMode>,
)
