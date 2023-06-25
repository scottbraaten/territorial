import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/submit">Order</NavLink>
      </li>
      <li>
        <NavLink to="/customers">Customers</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
