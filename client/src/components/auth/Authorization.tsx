/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';

import { useAppDispatch } from '../../redux/store';
import { User } from '../../redux/redusers/type';
import { useNavigate } from 'react-router-dom';

function AuthorizationPage(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPasssword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };
    dispatch({ type: 'auth/login', payload: data.user });
    navigate('/');
  };
  return (
    <div>
      <h1>AuthorizationPage</h1>
      <form onSubmit={onHandleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        <input value={password} onChange={(e) => setPasssword(e.target.value)} type="text" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
