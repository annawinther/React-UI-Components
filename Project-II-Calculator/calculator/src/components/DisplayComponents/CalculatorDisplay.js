import React from 'react';
import './Display.css';

function CalculatorDisplay ({ display }) {
    return (
        <div className="calculator-display">
            <h1>{display}</h1>
        </div>
    );
}

export default CalculatorDisplay;