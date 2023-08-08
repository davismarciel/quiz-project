import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';

import Quiz from '../../assets/img/quiz.svg';

import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Welcome!</h2>
      <p>Hit the button below to start the game</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE' })} type="submit">QUIZ ME!</button>
      <img src={Quiz} alt="Quiz homepage" />
    </div>
  );
};

export default Welcome;
