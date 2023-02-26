import {NavLink} from "react-router-dom"

export default function NavBar(){
    return (
      <nav className="nav" >
        <ul>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
    );
}