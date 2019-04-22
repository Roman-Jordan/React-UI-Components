import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
const HeaderContainer = () => {
    return (
    <header className="header">
        <HeaderTitle />
        <HeaderContent />
    </header>);
}

export default HeaderContainer;