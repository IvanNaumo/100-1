import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import { MainPage } from './components/MainPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          {/* <Route path="/top" element={<TopPlayersList />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
