import { useContext, createContext, useReducer } from 'react';
import questions from '../data/questions';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => {
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

    case 'CHANGE_QUESTION':
      let nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
      };

    case 'CHECK_ANSWER':
      if (state.answerSelected) return state;

      const rightAnswer = action.payload.answer;
      const userAnswer = action.payload.option;

      let correctAnswers = 0;

      if (rightAnswer === userAnswer) correctAnswers = 1;

      return {
        ...state,
        score: state.score + correctAnswers,
        answerSelected: userAnswer,
      };

    case 'NEW_GAME':
      return initialState;

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
