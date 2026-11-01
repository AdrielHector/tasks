import { useState } from "react"
import TaskForm from "../Components/TaskForm"
import TaskCard from "../Components/TaskCard"
import useTaskStore from "../Storage/useTaskStorage"

const Tasks = () => {
  const tareas = useTaskStore((s) => s.tareas)
  const addTarea = useTaskStore((s) => s.addTarea)
  const toggleTarea = useTaskStore((s) => s.toggleTarea)
  const deleteTarea = useTaskStore((s) => s.deleteTarea)
  const updateTarea = useTaskStore((s) => s.updateTarea)

  const [filtro, setFiltro] = useState("todas")
  const [busqueda, setBusqueda] = useState("")
  const [editando, setEditando] = useState(null)

  const tareasFiltradas = tareas
    .filter((t) => filtro === "todas" || t.estado === filtro)
    .filter((t) => t.titulo.toLowerCase().includes(busqueda.toLowerCase()))

  const handleEditar = (datos) => {
    updateTarea(editando.id, datos)
    setEditando(null)
  }

  return (
    <div>
      <h2>Tareas</h2>

      {editando ? (
        <div>
          <h3>Editando: {editando.titulo}</h3>
          <TaskForm
            key={editando.id}
            inicial={editando}
            textoBoton="Guardar cambios"
            onGuardar={handleEditar}
          />
          <button onClick={() => setEditando(null)}>Cancelar</button>
        </div>
      ) : (
        <TaskForm onGuardar={addTarea} />
      )}

      <div>
        <input
          type="text"
          placeholder="Buscar por título"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="pendiente">Pendientes</option>
          <option value="completada">Completadas</option>
        </select>
      </div>

      {tareasFiltradas.length === 0 ? (
        <p>No hay tareas para mostrar.</p>
      ) : (
        <ul>
          {tareasFiltradas.map((t) => (
            <TaskCard
              key={t.id}
              tarea={t}
              onToggle={toggleTarea}
              onDelete={deleteTarea}
              onEdit={setEditando}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Tasks