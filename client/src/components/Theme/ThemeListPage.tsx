/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';
import ThemeItemPage from './ThemeItemPage';
import QuestionItem from './QuestionItem';
// import './styles/heroes.scss';

function ThemeListPage(): JSX.Element {
  const themes = useSelector((store: RootState) => store.themes.themes);
  const navigate = useNavigate();
console.log(themes);

  return (
    <>
      <div className="hero-page__container">
      {themes.map((theme) =>  (
        <>
        
        <ThemeItemPage key={theme.id} theme={theme} />
        {theme.Questions.map((question)=> (
          <QuestionItem key={question.id} question={question} />
        ))}
        </>
           ))}
           
         
          
         </div>
      <button onClick={() => navigate(-1)} type="button">
         назад
      </button>
    </>
  );
}

export default ThemeListPage;
