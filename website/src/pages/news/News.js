import React, { Component } from 'react';
import './News.css'
import exampleData from '../../../server/mock/example.json';


class News extends Component {
 

    render() {
        let article = this.props.location.state.article;
        let title = article.title;
        let source = article.source.name;
        let content = article.content;
        let published = article.publishedAt;
        let sourceURL = article.url;
        let imageURL = article.urlToImage;
        let author = article.author;
        return (
            <div className="gridContainer">
                <div className="newsHeader">
                    <h3>{title}</h3>
                </div>

                <div className="sidebar">
                    <a>Hjem</a>
                    <a>Bort</a>
                    <a>Uavgjort</a>
                    <a>Hehe</a>
                </div>

                <div className="picture">
                    <img id="newsPicture" src={imageURL} alt="image"/>
                </div>

                <div className="information">
                  <p>{content}</p> <br/>
                  hentet fra: {sourceURL}
                </div>
                

            </div>
        );
    }
}

export default News;