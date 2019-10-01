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
} from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/klubb" component={Klubben} />
          <Route path="/lag" component={Lag} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
