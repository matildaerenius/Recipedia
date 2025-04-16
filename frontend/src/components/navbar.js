
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/recipes" activeclassname="active">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/inventory" activeclassname="active">Inventory</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeclassname="active">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
