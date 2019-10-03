import React, { Component } from 'react';
import Header from './composition/header/Header';
import Footer from './composition/footer/Footer';
import './App.css';
import Home from './pages/home/Home';
import Klubben from './pages/klubben/Klubben';
import Lag from './pages/lag/Lag';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import News from './pages/news/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[],
      newsURL: 'https://newsapi.org/v2/',
      apiKEY: 'd9cff6154bdb4fdab6fa8f5983ad9f9f',
    }
  }

  componentDidMount(){
    let topHeadlines = 'top-headlines?country=us';

    
    fetch(this.state.newsURL+topHeadlines+'&apiKey='+this.state.apiKEY)
    .then(response => response.json())
    .then(data => this.setState({articles: data.articles}));

    console.log(this.state.articles);
  }


  render() {

    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" 
          component = {() => <Home articles={this.state.articles}/>}
           />
          <Route path="/klubb" component={Klubben} />
          <Route path="/lag" component={Lag} />
          <Route path ="/news" component={News}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
