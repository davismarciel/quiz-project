import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';

import './Option.css';

const Option = ({ option }) => {
  return (
    <div className="option">
      <p>{option}</p>
    </div>
  );
};

export default Option;
