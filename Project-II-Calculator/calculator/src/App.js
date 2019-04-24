import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="Calculator">
      <CalculatorDisplay />
    </div>
  );
};

export default App;
