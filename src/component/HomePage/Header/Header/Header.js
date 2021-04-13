import React from 'react';
import BusinessInfo from '../../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarComponent from '../Navbar/NavbarComponent';
import './Header.css'

const Header = () => {
    return (
        <div className="headerContainer">
            <NavbarComponent></NavbarComponent>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;