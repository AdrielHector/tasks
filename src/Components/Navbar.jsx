import { NavLink } from "react-router-dom"

const Navbar = () => (

<nav>
    <NavLink to="/" end>Inicio</NavLink>
    <NavLink to="/Tasks">Tareas</NavLink>
    <NavLink to="/Profile">Perfil</NavLink>
  </nav>

)

export default Navbar
