import { useParams, Link } from "react-router-dom"
import useTaskStore from "../Storage/useTaskStorage"

const TaskDetail = () => {
  const { id } = useParams()
  const tareas = useTaskStore((s) => s.tareas)
  const cargada = useTaskStore((s) => s.cargada)

  const tarea = tareas.find((t) => t.id === id)

  if (!cargada) {
    return <p>Cargando...</p>
  }

  if (!tarea) {
    return (
      <div>
        <h2>Tarea no encontrada</h2>
        <p>La tarea que buscás no existe o fue eliminada.</p>
        <Link to="/Tasks">Volver a tareas</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>Descripción: {tarea.descripcion}</p>
      <p>Prioridad: {tarea.prioridad}</p>
      <p>Estado: {tarea.estado}</p>
      <Link to="/tareas">Volver a tareas</Link>
    </div>
  )
}

export default TaskDetail