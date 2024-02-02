/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import ThemeItemPage from './ThemeItemPage';
import QuestionItem from './QuestionItem';

function ThemeListPage(): JSX.Element {
  const themes = useSelector((store: RootState) => store.themes.themes);

  console.log(themes);

  return (
    <>
      <div className="hero-page__container">
        {themes.map((theme) => (
          <>
            <ThemeItemPage key={theme.id} theme={theme} />
            {theme.Questions.map((question) => (
              <QuestionItem key={question.id} question={question} />
            ))}
          </>
        ))}
      </div>
    </>
  );
}

export default ThemeListPage;
