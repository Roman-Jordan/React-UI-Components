import React from 'react';
import './Button.scss';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';

const NumberButton = (props) =>{
    console.log(props);
    return(
        <div className="NumberButton" onClick={() => CalculatorDisplay(props.buttons.text)}>
            <p>{props.buttons.text}</p>
        </div>
    )
}

export default NumberButton;