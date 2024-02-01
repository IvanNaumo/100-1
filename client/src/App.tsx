
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameBoard from './components/GameBoard';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import UserProfile from './components/user/UserProfile';
import NavBar from './components/common/NavBar';
// import { useAppDispatch } from './redux/store';
// import { checkUserSession, loadQuestions } from './redux/actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Проверяем сессию пользователя при инициализации приложения
    dispatch(checkUserSession());
    // Загружаем вопросы для игры
    dispatch(loadQuestions()).catch(console.error);
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar /> {/* Навигационная панель */}
      <Routes>
        <Route path="/" element={<GameBoard />} /> {/* Игровая доска */}
        <Route path="/sign-in" element={<SignIn />} /> {/* Страница входа */}
        <Route path="/sign-up" element={<SignUp />} /> {/* Страница регистрации */}
        <Route path="/user-profile" element={<UserProfile />} /> {/* Личный кабинет пользователя */}
        {/* Можно добавить дополнительные маршруты по мере необходимости */}
        <Route path="*" element={<h1>404: Страница не найдена</h1>} /> {/* Страница 404 */}
      </Routes>
    </div>
  );
}

export default App;
