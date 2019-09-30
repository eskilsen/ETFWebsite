import React, { Component } from 'react';
import './Footer.css';

import igLogo from '../../assets/footer/ig.png';
import faceLogo from '../../assets/footer/facebook.png';
import twitterLogo from '../../assets/footer/twitter.png';

class Footer extends React.Component {

    render() {
        return (

            <div className="footer">
                <div className="footerElements">
                    
                    <div className="SoMe">
                        <a href = "https://www.instagram.com/eidsvoldturn/">
                        <img className="instagram" src={igLogo} />
                        </a>
                        <a href="https://www.facebook.com/eidsvoldturnfotball/">
                            <img className="facebook" src = {faceLogo} />
                        </a>
                        <a href="https://twitter.com/eidsvoldturn">
                            <img className="twitter" src = {twitterLogo}/>
                        </a>
                    </div>

                    <div className="madeBy">
                        <p>
                        Made by:<br/>
                        Nicolai C. Michelet<br/>
                        Eskil Hognestad
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;