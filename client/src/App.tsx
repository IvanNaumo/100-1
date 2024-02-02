import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<NavBar />} />
          {/* <Route path="/top" element={<TopPlayersList />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
