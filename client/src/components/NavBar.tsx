import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import RegistrationPage from './auth/registration';

export default function NavBar() {
  return (
    <>
      <ul className="nav_container">
        <li className="nav_item">Hello</li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/top">
            TOP players
          </NavLink>
        </li>
        <li className="nav_item">
        <RegistrationPage/>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/login">
            Autorization
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
