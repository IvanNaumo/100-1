/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import type { User } from '../../redux/redusers/type';

function RegistrationPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        rpassword,
      }),
    });

    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };

    console.log('data:', data);
    dispatch({ type: 'auth/registration', payload: data.user });
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div>
      <button onClick={openModal}>Sign-Up</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <form onSubmit={onHandleSubmit}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
              />
              <input
                value={password}
                onChange={(e) => setPasssword(e.target.value)}
                type="text"
                placeholder="Enter password"
              />
              <input
                value={rpassword}
                onChange={(e) => setRpasssword(e.target.value)}
                type="text"
                placeholder="Enter password"
              />
              <button type="submit" >Sign-Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;
