import React from 'react';

import RegistrationPage from './auth/Registration';
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

  return (
    <>
      <ul className="nav_container">
        {user && <li>Hello, {user.name}!</li>}

        {/* <li className="nav_item">
          <NavLink className="nav_link" to="/top">
            TOP players
          </NavLink>
        </li> */}
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
