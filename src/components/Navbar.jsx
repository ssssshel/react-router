import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return ( 
    <div>
      <ul>
        <li>
          <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </div>
   );
}
 
export default Navbar;