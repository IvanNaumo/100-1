import React, { useState } from 'react';
import type { Question } from './type';

function QuestionItem({ question }: { question: Question }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/questions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    });

    const data: { message: string } = (await res.json()) as {
      message: string;
    };

    console.log('data:', data);
    alert(data);
    dispatch({ type: 'answer', payload: data.user });
    setIsOpen(false)
    navigate('/');
  };

  return (
    // <div className="hero-item-page__item">
    //   <h2 className="hero-item-page__item--name">{question.name}</h2>
    // </div>
    <div>
      <button onClick={() => setIsOpen(true)}>question</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={(e)=> onHandleSubmit(e)}>
              <h1>{question.name}</h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="введите ответ"
              />
              <button type="submit" onClick={() => setIsOpen(false)}>ответить</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionItem;
