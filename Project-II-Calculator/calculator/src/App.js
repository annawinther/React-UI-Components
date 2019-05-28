import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import SymbolButton from './components/ButtonComponents/SymbolsButton';

// const numbers = [7,8,9,4,5,6,1,2,3];
// const symbols = ['/', 'x', '-', '+', '='];

const App = () => {
  return (
    <div className="calculator">
      <div className="row">
      <CalculatorDisplay display={0}/>
      </div>
      <div className="row">
      <ActionButton className="action" text='clear' buttonStyle='clear' />
      <SymbolButton  text='/' buttonStyle='symbol' />
      </div>
      <div className="row">
      <NumberButton text='7' buttonStyle='number' />
      <NumberButton text='8' buttonStyle='number' />
      <NumberButton text='9' buttonStyle='number' />
      <SymbolButton  text='x' buttonStyle='symbol' />
      </div>
      <div className="row">
      <NumberButton text='4' buttonStyle='number' />
      <NumberButton text='5' buttonStyle='number' />
      <NumberButton text='6' buttonStyle='number' />
      <SymbolButton  text='-' buttonStyle='symbol' />
      </div>
      <div className="row">
      <NumberButton text='1' buttonStyle='number' />
      <NumberButton text='2' buttonStyle='number' />
      <NumberButton text='3' buttonStyle='number' />
      <SymbolButton  text='+' buttonStyle='symbol' />
      </div>
      <div className="row">
      <ActionButton className="action" text='0' buttonStyle='zero' />
      <SymbolButton text='=' buttonStyle='symbol'/>
      
     </div>
  </div>
)};



export default App;
