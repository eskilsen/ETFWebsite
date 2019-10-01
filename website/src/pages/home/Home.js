import React, { Component } from 'react';
import exampleData from '../../../server/mock/example';
import './Home.css';




class Home extends Component {


    newsDisplayer = () =>(
        exampleData.map(shortNews => <a href={shortNews.id}><li key={shortNews.id}>{shortNews.newsInShort}</li></a>)
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
