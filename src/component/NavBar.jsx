import { NavLink } from "react-router-dom"
import { domain } from "../../domain";
export default function NavBar() {
  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 dark:text-slate-800 shadow-lg dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4">

      <ul className="flex flex-row mx-auto py-4 space-x-10 ">
        <li className="font-medium text-5xl  hover:text-neutral-700 focus:text-neutral-700">
          <NavLink to={`/${domain}`}>About</NavLink>
        </li>
        {/* <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
        <li className="font-medium text-5xl  hover:text-neutral-700 focus:text-neutral-700">
          <NavLink to={`/${domain}/projects`}>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}