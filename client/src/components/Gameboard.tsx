// GameBoard.tsx
import React, { useState } from 'react';
import QuestionModal from './QuestionModal';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { selectAllQuestions, answerQuestion } from '../redux/actions';

const GameBoard = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectAllQuestions); // Предполагаем, что у вас есть селектор для выбора всех вопросов
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Функция для обработки нажатия на вопрос
  const handleQuestionClick = (question) => {
    setActiveQuestion(question);
  };

  // Функция для обработки закрытия модального окна вопроса
  const handleCloseModal = () => {
    setActiveQuestion(null);
  };

  // Функция для обработки ответа на вопрос
  const handleSubmitAnswer = (answer) => {
    dispatch(answerQuestion(activeQuestion.id, answer)); // Предполагаем, что у вас есть action для отправки ответа
    setActiveQuestion(null);
  };

  return (
    <div className="game-board">
      {questions.map((question) => (
        <div
          key={question.id}
          className="question-tile"
          onClick={() => handleQuestionClick(question)}
        >
          {question.value} {/* Показываем стоимость вопроса */}
        </div>
      ))}
      {activeQuestion && (
        <QuestionModal
          question={activeQuestion}
          onClose={handleCloseModal}
          onSubmit={handleSubmitAnswer}
        />
      )}
    </div>
  );
};

export default GameBoard;
