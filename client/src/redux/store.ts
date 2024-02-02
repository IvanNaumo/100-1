import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { themesReducer } from './reducers/themesReducer';


export const store = createStore(
  combineReducers({
    themes: themesReducer,
  })
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

=======
import { authReducer } from './redusers/authReducer';

export const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
>>>>>>> 19c193e72d41074438d872cb3a71bdee85957ba0
export const useAppDispatch: () => AppDispatch = useDispatch;
