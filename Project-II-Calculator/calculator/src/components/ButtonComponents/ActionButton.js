import React from 'react';
import './Button.scss';

const ActionButton = (action,i) =>{
    return(
        <div className={`ActionButton ${action.buttons.name}`} data-action={action.buttons.name}>
             <p>{action.buttons.text}</p>
        </div>
    )
}

export default ActionButton;