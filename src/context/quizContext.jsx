/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-filename-extension */
import { useContext, createContext, useReducer } from 'react';
import questions from '../data/questions';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
};

const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case 'SHUFFLE_QUESTIONS':
      const shuffledQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: shuffledQuestions,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
