import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';

import RegistrationPage from './components/auth/registration';
import AuthorizationPage from './components/auth/Authorization';
import { useAppDispatch } from './redux/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const checkUsers = async (): Promise<void> => {
    const res = await fetch('/api/users');
    const data: { users: User[] } = (await res.json()) as {
      user: User;
    };
    dispatch({ type: 'auth/registration', payload: data.user });
  };

  useEffect(() => {
    checkUsers().catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          {/* <Route path="/top" element={<TopPlayersList />} /> */}
          <Route path="/registration" element={<RegistrationPage />} />

          <Route path="/login" element={<AuthorizationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
