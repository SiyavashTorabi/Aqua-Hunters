
import { NavLink } from 'react-router-dom'




const Nav = ({ user }) => {
  return (
    <nav>
      
      <div className="nav bar" >

        <NavLink className="" to="/">Home</NavLink>
        <NavLink className="" to="/species">species List</NavLink>
        <NavLink className="" to="/add-specie">Add Specie</NavLink>
        <div className="links">




        </div>
      </div>
    </nav>
  )
}
export default Nav
