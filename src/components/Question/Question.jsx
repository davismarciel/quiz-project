import { useContext, useEffect } from 'react';
import { QuizContext } from '../../context/quizContext';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  useEffect(() => {
    dispatch({ type: 'SHUFFLE_QUESTIONS' });
  }, []);

  return (
    <div id="question">
      <p>Question {quizState.currentQuestion + 1} out of {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p>Options</p>
      </div>
      <button type="button">Next</button>
    </div>
  );
};

export default Question;
