import { useContext } from 'react';
import { QuizContext } from './context/quizContext';

import './App.css';

// Component
import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';
import GameOver from './components/GameOver/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Programming Quiz</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  );
}

export default App;
