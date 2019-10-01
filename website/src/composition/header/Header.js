
import ReactDOM from 'react-dom';
import './Header.css';
import React, { Component } from 'react';
import { Select } from 'nav-frontend-skjema';
import { Søkeknapp } from 'nav-frontend-ikonknapper';
import {Link} from 'react-router-dom'
import headerPhoto from '../../assets/header/eidsvoldLogo.jpg';


export default class Header extends Component {

    render() {
        
        return (
            <div className="header">
                <div className="headerStuff">
                    <img className="headerLogo" src={headerPhoto} 
                        alt="Eidsvoll Fotball" 
                        height="10%" 
                        width="10%"/>
                    <div className="titleContainer">
                        <p className="title">Eidsvold Turn Fotball</p>
                        <p className="subTitle">En klubb å være stolt av</p>
                    </div>
                </div>
                <div className="navBar">
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/klubb">Klubben</Link></li>
                        <li><Link className="link" to="/lag">Lag</Link></li>
                        <li className="search">Søk</li>
                    </ul>
                </div>
                

            </div>
        );
    }
}


