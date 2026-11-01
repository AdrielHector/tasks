import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home" 
import { useEffect } from "react"
import useTaskStore from "./Storage/useTaskStorage"
import NotFound from "./Pages/NotFound"
import Profile from "./Pages/Profile"
import TaskDetail from "./Pages/TaskDetail"
import Tasks from "./Pages/Tasks"
import Layout from "./Components/Layout"
const App = () => {
   const tareas = useTaskStore((s) => s.tareas)
  const cargada = useTaskStore((s) => s.cargada)
  const cargarTareas = useTaskStore((s) => s.cargarTareas)

  useEffect(() => {
    const guardadas = localStorage.getItem("tareas")
    cargarTareas(guardadas ? JSON.parse(guardadas) : [])
  }, [cargarTareas])

  useEffect(() => {
    if (cargada) {
      localStorage.setItem("tareas", JSON.stringify(tareas))
    }
  }, [tareas, cargada])


  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Tasks" element={<Tasks/>} />
      <Route path="/Tasks/:id" element={<TaskDetail/>} />
      <Route path="*" element = {<NotFound />} />
      <Route path= "/Profile" element= {<Profile/>} />
      </Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
