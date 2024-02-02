import React from 'react';
import type { Question } from './type';



function QuestionItem({ question }: {question: Question} ): JSX.Element {
  return (
    <div className="hero-item-page__item">
      <h2 className="hero-item-page__item--name">{question.name}</h2>
    </div>
  );
}

export default QuestionItem;
