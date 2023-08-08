import { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Programming Quiz</h1>
      <Welcome />
    </div>
  );
}

export default App;
