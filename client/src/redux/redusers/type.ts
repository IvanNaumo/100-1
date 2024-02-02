export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  score: number;
};

export type UserState = {
  user: User[];
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'user/load'; payload: User[] }
  | { type: 'auth/registration'; payload: User }
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' };
