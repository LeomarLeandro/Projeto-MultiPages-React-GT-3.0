import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="logo">
          React Router
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/user/1">User</NavLink>
        </div>
      </nav>
    </header>
  );
}
