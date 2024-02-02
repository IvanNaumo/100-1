import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';

import RegistrationPage from './components/auth/registration';
import AuthorizationPage from './components/auth/Authorization';


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>

          <Route index element={<MainPage />} />
          {/* <Route path="/top" element={<TopPlayersList />} /> */}
          <Route path="/registration" element={<RegistrationPage/>} />

          <Route path="/login" element={<AuthorizationPage/>} />


        </Route>
      </Routes>
    </div>
  );
}

export default App;
