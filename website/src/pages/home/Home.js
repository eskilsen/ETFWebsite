import React, { Component } from 'react';
import exampleData from '../../mock/example';
import './Home.css';




class Home extends Component {


    newsDisplayer = () =>(
        exampleData.map(name => <li key={name.id}>{name.last_name}</li>)
    );

    render() {


        
        return (
            <div className="home">
                <div className="highlighted">
                    <p>hei </p>
                </div>

                <div className="news">
                    <h2>Andre nyheter</h2>
                    <div className="newsList">
                        <ul>
                            {this.newsDisplayer()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
