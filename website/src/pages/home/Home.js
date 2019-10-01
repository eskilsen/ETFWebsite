import React, { Component } from 'react';
import exampleData from '../../../server/mock/example';
import './Home.css';




class Home extends Component {


    newsDisplayer = () =>(
        exampleData.map(shortNews => 
        <tr> 
            <td key={shortNews.id}>
            <a href="www.vg.no">{shortNews.newsInShort != "" ? shortNews.newsInShort: "ingen nyhet"}</a>
            </td>
        </tr>
        )
    );

    render() {


        
        return (
            <div className="home">
                <div className="highlighted">
                    <p>hei </p>
                </div>

                <div className="news">
                    <div className="newsList">
                        <table>
                            <tr>
                                <th>Nyheter</th>
                            </tr>
                            {this.newsDisplayer()}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
