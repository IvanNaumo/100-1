/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
// import type { User } from '../../redux/reducers/types';
// import { useAppDispatch } from '../../redux/store';

function RegistrationPage(): JSX.Element {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');

  //   const dispatch = useAppDispatch();

  //   const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
  //     e.preventDefault();
  //     const res = await fetch('/api/auth/sign-up', {
  //       method: 'post',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name,
  //         img,
  //         password,
  //         rpassword,
  //       }),
  //     });
  //     const data: { message: string; user: User } = (await res.json()) as {
  //       message: string;
  //       user: User;
  //     };
  //     dispatch({ type: 'auth/sign-up', payload: data.user });
  //   };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
            
            <form>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
              <input value={img} onChange={(e) => setImg(e.target.value)} type="text" />
              <input value={password} onChange={(e) => setPasssword(e.target.value)} type="text" />
              <input
                value={rpassword}
                onChange={(e) => setRpasssword(e.target.value)}
                type="text"
              />
              <button type="submit">Sign-Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;
