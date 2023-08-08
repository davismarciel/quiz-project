import { useContext } from 'react';

import { QuizContext } from '../../context/quizContext';

import WellDone from '../../assets/img/welldone.svg';

import './GameOver.css';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Game over!</h2>
      <p>Points: {quizState.score}</p>
      <p>You answered right
        <span>{quizState.score}</span>
        out of
        <span>{quizState.questions.length}</span>
        questions
      </p>
      <img src={WellDone} alt="End of the quiz" />
      <button onClick={() => dispatch({ type: 'NEW_GAME' })} type="button">Restart</button>
    </div>
  );
};

export default GameOver;
