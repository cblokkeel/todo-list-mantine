import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'

function App() {
  const [tasks, setTasks] = useState([])
  const [lastId, setLastId] = useState(0)
  const [taskInput, setTaskInput] = useState("")

  const handleTaskInputChange = e => {
    setTaskInput(e.target.value)
  }

  const handleResetTaskInput = e => {
    setTaskInput('')
  }

  const handleAddTask = () => {
    if (taskInput && taskInput.trim() !== '') {
      setTasks([...tasks, {id: lastId + 1, nom: taskInput}])
      setLastId(lastId + 1)
      handleResetTaskInput()
    } 
  }

  const handleSubmit = e => {
    if (e.code === 'Enter') handleAddTask()
  }

  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleFinishTask = id => {
    if (document.querySelector(`#id-${id}`).classList.contains('line-through')) {
      return document.querySelector(`#id-${id}`).classList.remove('line-through')
    }
    document.querySelector(`#id-${id}`).classList.add('line-through')
  }

  return (
    <div className="App bg-slate-100 h-screen">
      <Header />
      <AddTask handleSubmit={handleSubmit} handleResetTaskInput={handleResetTaskInput}  handleTaskInputChange={handleTaskInputChange} taskInput={taskInput} />
      <ListTask handleFinishTask={handleFinishTask} tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default App
