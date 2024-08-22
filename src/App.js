import logo from './logo.svg';
import './App.css';
import QuizContainer from './components/QuizContainer/QuizContainer';
import React, { useState } from 'react';
import { quizList } from './data/quizList/quizList';

export const quizesListContext = React.createContext()

function App() {
  const[quizesList,setQuizesList] = useState(quizList)

  return (
    <div className="App">
      <quizesListContext.Provider value={[quizesList,setQuizesList]}>
        <header className="App-header">
          <QuizContainer/>
        </header>
      </quizesListContext.Provider>
    </div>
  );
}

export default App;
