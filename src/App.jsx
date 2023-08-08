import { useContext } from 'react';
import { QuizContext } from './context/quizContext';

import './App.css';

// Component
import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Programming Quiz</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
    </div>
  );
}

export default App;
