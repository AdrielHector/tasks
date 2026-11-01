import { Link } from "react-router-dom"

const TaskCard = ({ tarea, onToggle, onDelete, onEdit }) => {
  const completada = tarea.estado === "completada"

  return (
    <li>
      <h3 style={{ textDecoration: completada ? "line-through" : "none" }}>
        {tarea.titulo}
      </h3>
      <p>{tarea.descripcion}</p>
      <p>
        Prioridad: {tarea.prioridad} | Estado: {tarea.estado}
      </p>

      <button onClick={() => onToggle(tarea.id)}>
        {completada ? "Marcar pendiente" : "Marcar completada"}
      </button>
      <button onClick={() => onDelete(tarea.id)}>Eliminar</button>
      <Link to={"/Tasks/${tarea.id}"}>Ver detalle</Link>
<button onClick={() => onEdit(tarea)}>Editar</button>
    </li>
  )
}

export default TaskCard