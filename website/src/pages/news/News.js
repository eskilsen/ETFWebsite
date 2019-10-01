import React, { Component } from 'react';

class News extends Component {
 

    render() {
        return (
            <div className="gridContainer">
                <div className="newsHeader">
                    <p>newsHeader</p>
                </div>

                <div className="linkBar">
                    <ul>
                        <li>hallo</li>
                        <li>hallo</li>
                        <li>hallo</li>
                    </ul>

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