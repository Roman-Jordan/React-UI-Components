import React from 'react';
import './Button.scss';

const NumberButton = (props) =>{
    console.log(props);
    return(
        <div className="NumberButton">
            <p>{props.buttons.text}</p>
        </div>
    )
}

export default NumberButton;