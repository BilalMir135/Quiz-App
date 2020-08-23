export type StartingScreenType = {
  startClickHandler: () => void;
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
