import {useState} from 'react'


const TaskForm = ({ onGuardar, inicial, textoBoton = "Agregar tarea" }) => {

 const [name, setName] = useState(inicial ? inicial.titulo : "")
const [description, setDescription] = useState(inicial ? inicial.descripcion : "")
const [prioridad, setPrioridad] = useState(inicial ? inicial.prioridad : "media")
  const [error,setError] = useState("")

  

  const handleSubmit  = (e) => {
    e.preventDefault()

  const limpio ={
    titulo: name.trim(),
    descripcion: description.trim(),
    prioridad: prioridad.trim()
  }

if (limpio.titulo==="" || limpio.descripcion===""){
  setError("Todos los campos son obligatorios")
  return
}

onGuardar(limpio)
}
  return (
    <div>
    <form onSubmit={handleSubmit}> 
    <label htmlFor="name">Nombre de la Tarea {""}</label>
    <input type ="text" 
    id= "name"
     name="name"
      placeholder="Ingrese el nombre de la tarea" 
      value={name}
       onChange={(e) => { setName(e.target.value), setError("")}}/>
    <label htmlFor="description">Descripción de la Tarea</label>
    <input type ="text"
     id= "description"
     placeholder="Ingrese la descripción de la tarea"
     value={description}
     onChange={(e) => { setDescription(e.target.value), setError("")}}/>
     <label htmlFor="Prioridad">Prioridad de la Tarea</label>
    <select 
    id= "Prioridad"
    value={prioridad}
    onChange={(e) => { setPrioridad(e.target.value), setError("")}}>
    <option value="baja">Baja</option>
    <option value="media">Media</option>
    <option value="alta">Alta</option>
    </select>
{error && <p>{error}</p>}
<button type="submit">{textoBoton}</button>          </form>
 </div>
  )
}

export default TaskForm
