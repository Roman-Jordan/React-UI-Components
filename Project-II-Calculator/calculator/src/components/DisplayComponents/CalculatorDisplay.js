import React from 'react';
import './Display.scss';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const btnObj = [{text : 9},{text : 8},{text : 7},{text : 6},{text : 5},{text : 4},{text : 3},{text : 2},{text : 1},{text : 0}];
const btnOpp = [{text:'clear', name:'clear'},{text:'\xF7', name:'divide'},{text:'\xD7', name:'multiply'},{text:'\u2212', name:'sub'},{text:'+', name:'add'},{text:'=', name:'eql'}];


const CalculatorDisplay = () =>{
    return(
        <div className="CalculatorDisplay">
            <div className="CalculatorView">
                <p>0</p>
            </div>
            <div className="CalculatorButtons">
                <div className="buttons">
                    {btnObj.map((button,i) => {
                        if(i===0){
                            return ([
                                <ActionButton key={i} buttons={btnOpp[i]}/>,
                                <NumberButton key={i + 1} buttons={button}/>
                            ])
                        }
                        return <NumberButton key={i} buttons={button}/>;
                    })}
                </div>
                <div className="operators">
                    {btnOpp.map((button,i) => {
                        return  i !== 0 ? <ActionButton key={i} buttons={button}/>:false;
                    })}
                </div>
            </div>
        </div>
    )
}

export default CalculatorDisplay;