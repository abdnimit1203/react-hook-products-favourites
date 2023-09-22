import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className=" p-8 bg-slate-100 text-lg shadow-md">
        <div className="flex justify-between px-10">
        <Logo></Logo>
        <ul className="flex gap-5 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " active text-red-500" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " active text-red-500" : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " active text-red-500" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
