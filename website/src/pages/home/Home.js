import React, { Component } from 'react';

import './Home.css';


var data = require('../../mock/example.json');

class Home extends Component {

   

    render() {

        
        return (
            <div className="home">
                <div className="highlighted">
                    <p>hei {console.log(data)}</p>
                </div>

                <div className="news">
                    <h2>Andre nyheter</h2>
                    <div className="newsList">
                        <ul>
                            <li>halla</li>
                            <li>bnalla</li>
                            <li>skjer</li>
                            <li>fdp</li>
                            <li>koman</li>
                            <li>skjer</li>
                            <li>fucks</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;