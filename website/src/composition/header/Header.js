
import ReactDOM from 'react-dom';
import './Header.css';
import React, { Component } from 'react';
import { Select } from 'nav-frontend-skjema';
import { Søkeknapp } from 'nav-frontend-ikonknapper';
import {Link} from 'react-router-dom'


export default class Header extends Component {

    render() {
        
        return (
            <div className="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/klubb">Klubben</Link></li>
                    <li><Link to="/lag">Lag</Link></li>
                </ul>

            </div>
        );
    }
}


