import React, { Component } from 'react';
import './News.css'
import exampleData from '../../../server/mock/example.json';


class News extends Component {
 

    render() {
        let article = this.props.location.state.article;
        let title = article.title;
        let source = article.source;
        let content = article.content;
        let published = article.publishedAt;
        let sourceURL = article.url;
        let imageURL = article.urlToImage;
        return (
            <div className="gridContainer">
                <div className="newsHeader">
                    <h3>{title}</h3>
                </div>

                <div className="picture">
                    <img src={imageURL} alt="image"/>
                </div>

                <div className="information">
                  {content}
                </div>
                

            </div>
        );
    }
}

export default News;