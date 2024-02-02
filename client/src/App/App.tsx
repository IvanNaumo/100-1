import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from '../components/NavBar';

import RegistrationPage from '../components/auth/Registration';
import AuthorizationPage from '../components/auth/Authorization';
import { useAppDispatch } from '../redux/store';
import type { User } from '../redux/types';
import { Theme } from '../components/Theme/type';
import ThemeListPage from '../components/Theme/ThemeListPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const checkUsers = async (): Promise<void> => {
    const res = await fetch('/api/users');
    const data: { users: User[] } = (await res.json()) as {
      user: User;
    };
    dispatch({ type: 'auth/registration', payload: data.user });
  };
  const loadThemes = async (): Promise<void> => {
    const res = await fetch('/api/questions');
    const data: { themes: Theme[] } = (await res.json()) as { themes: Theme[] };
    // dispatch({ type: 'themes/load', payload: data.themes });
    dispatch({ type: 'themes/load', payload: data.themes });
    // console.log(data);
  };

  useEffect(() => {
    checkUsers().catch(console.log);
    loadThemes().catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<ThemeListPage />} />
          {/* <Route path="/top" element={<TopPlayersList />} /> */}
          <Route path="/registration" element={<RegistrationPage />} />

          <Route path="/login" element={<AuthorizationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
