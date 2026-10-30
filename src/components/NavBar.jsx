import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* NavLink changes routes without reloading the whole website. */}
      <NavLink className="brand" to="/">
        <img src="/logo.png" alt="" width="42" height="42" />
        Basil & Bowl
      </NavLink>
      <ul className="links">
        {/* The matching NavLink receives the active class. */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
