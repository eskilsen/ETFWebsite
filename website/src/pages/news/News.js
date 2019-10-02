import React, { Component } from 'react';
import './News.css'

class News extends Component {
 

    render() {
        return (
            <div className="gridContainer">
                <div className="newsHeader">
                    <p>newsHeader</p>
                </div>

                <div className="linkBar">
                    <p>Hallo</p>
                    <p>Hallo</p>
                    <p>Hallo</p>
                    <p>Hallo</p>

                </div>
                <div className="information">
                    <p>Her kommer informasjonen</p>
                    <p>Her kommer informasjonen</p>
                    <p>Her FAEN informasjonen</p>
                    <p>Her kommer informasjonen</p>
                    <p>Her kommer informasjonen</p>
                    <p>Her kommer informasjonen</p>
                    <p>Her kommer informasjonen</p>
                    <p>Her kommer informasjonen</p>
                </div>

            </div>
        );
    }
}

export default News;