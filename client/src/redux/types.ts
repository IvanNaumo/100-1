import type { Theme } from '../components/Theme/type';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type State = {
    themes: Theme[];
};

export type UsersState = {
  users: User[];
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'themes/load'; payload: Theme[] }
  | { type: 'answer'; payload: User }