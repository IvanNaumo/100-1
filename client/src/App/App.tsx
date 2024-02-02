/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppDispatch } from '../redux/store';

import NavBar from '../components/NavBar';
import ThemeListPage from '../components/Theme/ThemeListPage';
import type { Theme } from '../components/Theme/type';
// import { useSelector } from 'react-redux';

function App(): JSX.Element {
  const dispatch = useAppDispatch();


  const loadThemes = async (): Promise<void> => { 
    const res = await fetch('/api/questions');
    const data: { themes: Theme[] } = (await res.json()) as { themes: Theme[] };
    // dispatch({ type: 'themes/load', payload: data.themes });
    dispatch({ type:'themes/load', payload: data.themes });
   // console.log(data);
    
   
    
  };
  useEffect(() => {
    loadThemes().catch(console.log);
  })
  return (
    <div className="App">
      <Routes>
          <Route path="/themes" element={<ThemeListPage />} />
        <Route path="/" element={<NavBar />}>
          <Route index element={<NavBar />} />
          {/* <Route path="/top" element={<TopPlayersList />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
