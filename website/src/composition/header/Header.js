
import ReactDOM from 'react-dom';
import './Header.css';
import React, { Component } from 'react';
import { Select } from 'nav-frontend-skjema';
import { Søkeknapp } from 'nav-frontend-ikonknapper';


class Header extends Component {

    render() {

        const options = [
            'one','two','three'
        ]

        const defaultOption = options[0]
        return (
            <div className="header">
                <div className="mainHeader"></div>
                    <p>REKLAMEr</p>
                    <div className="searchAndDropdown">
                        <div className="dropdownMenu">
                        <Select>
                            <option value="Søk på alle sider og grupper">Søk på alle sider og grupper</option>
                            <option value="Forsiden">Forsiden</option>
                            <option value="Klubben">Klubben</option>
                            <option value="Seniorlagene">Seniorlagene</option>
                            <option value="Ungdomsavd">Ungdomsavd</option>
                            <option value="Yngres avd.">Yngres avd</option>
                            <option value="Arrangment">Arrangment</option>
                            <option value="Dommere">Dommere</option>
                            <option value="Idretts-SFO">Idretts-SFO</option>
                            <option value="Kvalitetsklubb">Kvalitetsklubb</option>
                        </Select>
                        </div>
                        <div className="searchContainer">
                            <form action="/">
                                <input type="text" placeholder="Skriv søkeordet her" name="search"/>
                                <button type="button" onclick="alert('hello world')">Søk</button>

                            </form>
                        </div>
                    </div>
                    
                    

                    
                    
                <div className="underHeader">
                    <div className="topnav">
                        <a class="active" href="">Forsiden</a>
                        <a class="active" href="">Klubben</a>
                        <a class="active" href="">Seniorlagene</a>
                        <a class="active" href="">Ungdomsavd.</a>
                        <a class="active" href="">Yngres avd.</a>
                        <a class="active" href="">Arrangment</a>
                        <a class="active" href="">Dommere</a>
                        <a class="active" href="">Idretts SFO</a>
                        <a class="active" href="">Kvalitetsklubb</a>
                        
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

