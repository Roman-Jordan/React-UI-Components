import React from 'react';
import './Header.css';

const HeaderTitle = () =>{
    return(
        <div className ="HeaderTitle">
            <h1 className="user-title">Lambda School</h1>
            <p className="user-info">@LambdaSchool &bull; 26 jan</p>
        </div>
    )
}

export default HeaderTitle;