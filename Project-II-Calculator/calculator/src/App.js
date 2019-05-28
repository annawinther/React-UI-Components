import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumbersButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <div className="buttons">
        <NumbersButton/>
      </div>
    </div>
  );
};

export default App;
