import React from 'react';
// import './components/HeaderFooter/Header.css';
import './Header.css';
import logo from "./Captain_America.svg";
//bilden är från https://upload.wikimedia.org/wikipedia/commons/1/15/Thor%27s_Hammer.svg
//https://commons.wikimedia.org/wiki/File:Captain_America_Shield_04.svg


//En enkelt header 
export const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header">Superhjältar och deras fiender</h1>
        </header>
    );
}
export default Header;