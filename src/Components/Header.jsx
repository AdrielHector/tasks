
import Navbar from "./Navbar"
import useTaskStore from "../Storage/useTaskStorage"

const Header = () => {
const nombre =useTaskStore((s)=> s.user.nombre)

  return (
    <div>
      <h1>TaskManager</h1>
      <Navbar/>
<span> hola, {nombre} </span>
    </div>
  )
}

export default Header
