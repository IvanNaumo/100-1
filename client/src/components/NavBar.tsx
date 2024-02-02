import React from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../redux/store';

export default function NavBar() {
  // const themes = useSelector((store: RootState) => store.themes.themes);
  // console.log(themes);
=======
import RegistrationPage from './auth/registration';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleLogout = async (): Promise<void> => {
    const res = await fetch('/api/auth/logout');
    const data: { message: string } = (await res.json()) as {
      message: string;
    };
    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
      navigate('/');
    }
  };

>>>>>>> 19c193e72d41074438d872cb3a71bdee85957ba0
  return (
    <>
      <ul className="nav_container">
        {user && <li>Hello, {user.name}!</li>}

        <li className="nav_item">
          <NavLink className="nav_link" to="/top">
            TOP players
          </NavLink>
        </li>
        <li className="nav_item">
          <RegistrationPage />
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/login">
            Autorization
          </NavLink>
        </li>
        <li onClick={onHandleLogout} className="nav_item">
          <NavLink className="nav_link" to="/logout">
            Logout
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavBar;
