import Quiz from '../../assets/img/quiz.svg';
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>Hit the button below to start the game</p>
      <button type="submit">QUIZ ME!</button>
      <img src={Quiz} alt="Quiz homepage" />
    </div>
  );
};

export default Welcome;
