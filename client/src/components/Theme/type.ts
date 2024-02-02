export type Theme = {
  id: number;
  name: string;
  Questions:Question[]
};

export type ThemeId = Theme['id'];


export type Question = {
  id: number;
  theme_id: number;
  name: string;
};

export type QuestionId = Question['id'];