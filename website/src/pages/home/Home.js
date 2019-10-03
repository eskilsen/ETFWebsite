import React, { Component } from 'react';
import exampleData from '../../../server/mock/example';
import './Home.css';
import {Link} from 'react-router-dom'





class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
      }

    newsDisplayer = () =>(
        this.props.articles.map((article,id) => 

        <tr> 
            
            <td key={id}>
                
            <Link to = {{
                pathname:`/news`,
                state: {
                    article: article
                }
            }}
            >
            {article.title != "" ? article.title: "ingen nyhet"}</Link>
            </td>
        </tr>
        )
    );

    render() {

<li><Link className="link" to="/">Home</Link></li>
        console.log(this.props.articles)
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
