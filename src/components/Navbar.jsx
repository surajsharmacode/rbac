// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2">
      <ul className="flex space-x-4">
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/roles">Roles</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
