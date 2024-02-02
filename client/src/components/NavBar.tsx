import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../redux/store';

export default function NavBar() {
  // const themes = useSelector((store: RootState) => store.themes.themes);
  // console.log(themes);
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
          <NavLink className="nav_link" to="/registration">
            Registration
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/login">
            Autorization
          </NavLink>
        </li>
      </ul>
    </>
  );
}
