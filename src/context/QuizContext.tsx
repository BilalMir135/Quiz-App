import React, { useReducer } from 'react';
import {
  QuizContextType,
  QuizReducerAction,
  QuizMetaDataType,
} from '../types/quizAppTypes';

const quizReducer = (state: QuizMetaDataType, action: QuizReducerAction) => {
  switch (action.type) {
    case 'CHANGE-NAME':
      state.name = action.value;
      return { ...state };
    case 'CHANGE-LEVEL':
      state.level = action.value;
      return { ...state };
    case 'CHANGE-TOTALQUESTIONS':
      state.totalQuestions = action.value;
      return { ...state };
    default:
      return state;
  }
};

const initialQuizMetaData: QuizMetaDataType = {
  name: '',
  level: 'easy',
  totalQuestions: '5',
};

export const QuizContext = React.createContext<QuizContextType | any>(
  undefined
);

const QuizContextProvider: React.FC<any> = ({ children }) => {
  const [quizMetaData, dispatch] = useReducer(quizReducer, initialQuizMetaData);

  const changeName = (event: React.ChangeEvent<{ value: string }>) => {
    dispatch({ type: 'CHANGE-NAME', value: event.target.value as string });
  };

  const changeLevel = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch({ type: 'CHANGE-LEVEL', value: event.target.value as string });
  };

  const changeTotalQuestions = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch({
      type: 'CHANGE-TOTALQUESTIONS',
      value: event.target.value as string,
    });
    console.log(quizMetaData);
  };
  return (
    <QuizContext.Provider
      value={{ quizMetaData, changeName, changeLevel, changeTotalQuestions }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
