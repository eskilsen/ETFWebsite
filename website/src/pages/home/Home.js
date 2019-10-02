import React, { Component } from 'react';
import exampleData from '../../../server/mock/example';
import './Home.css';
import {Link} from 'react-router-dom'




class Home extends Component {


    newsDisplayer = () =>(
        exampleData.map(shortNews => 

        <tr> 
            
            <td key={shortNews.id}>
                
            <Link to = {`/${shortNews.id}`}>{shortNews.newsInShort != "" ? shortNews.newsInShort: "ingen nyhet"}</Link>
            </td>
        </tr>
        )
    );

    render() {

<li><Link className="link" to="/">Home</Link></li>
        
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
