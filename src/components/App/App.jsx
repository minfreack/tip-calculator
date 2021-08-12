import React from 'react';
import './App.scss';
import logo from '../../images/logo.svg';
import { Main } from '../Main/Main';

function App() {
    return (
        <div className="container">
            <img src={logo} className="logo" alt=""/>
            <Main/>
        </div>
    );
}

export default App;
