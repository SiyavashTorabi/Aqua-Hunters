
import { NavLink } from 'react-router-dom'
import './navbar.css'



const Nav = ({ user }) => {
  return (
    <nav>
      
      <div className="nav-bar" >

        <NavLink className="link-A" to="/" >Aqua Hunters</NavLink>
        <NavLink className="link" to="/species">species List</NavLink>
        <NavLink className="link" to="/add-specie">Add Specie</NavLink>
        <div className="links">




        </div>
      </div>
    </nav>
  )
}
export default Nav
