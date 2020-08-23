import React from 'react';
import QuizApp from './components/QuizApp';
import QuizContextProvider from './context/QuizContext';

const App = () => {
  return (
    <div>
      <QuizContextProvider>
        <QuizApp />
      </QuizContextProvider>
    </div>
  );
};

export default App;
