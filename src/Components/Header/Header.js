import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <NavLink className={(isActive) => `${isActive ? 'active' : ''}`} to="/rgb/255/0/0">
        Red
      </NavLink>
      <NavLink className={(isActive) => `${isActive ? 'active' : ''}`} to="/rgb/255/0/255">
        Purple
      </NavLink>
      <NavLink className={(isActive) => `${isActive ? 'active' : ''}`} to="/rgb/255/255/0">
        Yellow
      </NavLink>
    </header>
  );
}
