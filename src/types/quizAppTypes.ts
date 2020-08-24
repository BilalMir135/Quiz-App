export type ScreenType = {
  screenChangeHandler: () => void;
};

export type QuizMetaDataType = {
  name: string;
  level: string;
  totalQuestions: string;
};

export type QuizContextType = {
  quizMetaData: QuizMetaDataType;
  changeName: (e: React.ChangeEvent<{ value: string }>) => void;
  changeLevel: (e: React.ChangeEvent<{ value: unknown }>) => void;
  changeTotalQuestions: (e: React.ChangeEvent<{ value: unknown }>) => void;
};

export type ActionType = {
  type: 'CHANGE-NAME' | 'CHANGE-LEVEL' | 'CHANGE_TOTALQUESTIONS';
};

export type QuizReducerAction = {
  type: string;
  value: string;
};

export type QuizCardType = {
  question: string;
  options: string[];
  callback: () => void;
  setUserAns: any;
  currentQuestionNumber: number;
};

export type QuestionType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizType = {
  question: string;
  answer: string;
  options: string[];
};
