import {NavLink} from "react-router-dom"

export default function NavBar(){
    return (
      <nav className="nav" >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/nothing-here">Nothing Here</NavLink>
          </li>
        </ul>
      </nav>
    );
}