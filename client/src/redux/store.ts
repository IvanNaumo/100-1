import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { themesReducer } from './redusers/themesReducer';
import { authReducer } from './redusers/authReducer';

export const store = createStore(
  combineReducers({
    auth: authReducer,
    themes: themesReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
