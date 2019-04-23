import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = () =>{
    return(
        <div className ="HeaderTitle">
            
            <ImageThumbnail />
            <div class="contentWrapper">
                <div className="contentTitle">
                    <h1 className="user-title">Lambda School</h1>
                    <p className="user-info">@LambdaSchool &bull; 26 jan</p>
                </div>
                <HeaderContent />
            </div>
            
        </div>
    )
}

export default HeaderTitle;