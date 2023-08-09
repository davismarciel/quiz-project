import { useContext, useEffect } from 'react';
import { QuizContext } from '../../context/quizContext';

import Option from '../Option/Option';

import './Question.css';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  useEffect(() => {
    dispatch({ type: 'SHUFFLE_QUESTIONS' });
  }, []);

  const onSelectOption = (option) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <p>Question {quizState.currentQuestion + 1} out of {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p>{currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
        </p>
      </div>
      {quizState.answerSelected && (
        <button
          onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}
          type="button"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Question;
