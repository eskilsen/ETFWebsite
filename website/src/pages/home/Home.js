import React, { Component } from 'react';
import exampleData from '../../../server/mock/example';
import './Home.css';
import {Link} from 'react-router-dom'





class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstArticle: this.props.articles[0],
        }
    }


    newsDisplayer = () =>(
        this.props.articles.filter((article,id) => {
            return id !== 0
        }).map((article,id) => {

            return(
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
        })
    );

    render() {
        let imageURL;
        let title;
        let firstArticle;
        if(this.state.firstArticle){
            imageURL = this.state.firstArticle.urlToImage;
            title = this.state.firstArticle.title;
            firstArticle = this.state.firstArticle;
        }
        


<li><Link className="link" to="/">Home</Link></li>
        console.log(this.props.articles)
        return (
            <div className="home">
                <div className="highlighted">
                <Link to = {{
                        pathname:`/news`,
                        state: {
                            article: firstArticle,
                        }
                    }}
                    >
                    
                    <img src={imageURL}/>
                    <div className="highlightedTitle">{title}</div>
                </Link>
                </div>

                <div className="news">
                    <div className="newsList">
                        <table>

                            
                            {this.newsDisplayer()}
                        </table>
                    </div>
                </div>
                <div className="sponsors">
                    <div className="mainSponsors">
                        <p>HOVED</p>
                    </div>
                    <div className="otherSponsors">
                        <p>Andre</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
