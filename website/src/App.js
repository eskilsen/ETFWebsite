import React, { Component } from 'react';
import Header from './composition/header/Header';
import Footer from './composition/footer/Footer';
import './App.css';
import Home from './pages/home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
       <Footer/>
      </div>
    );
  }
}

export default App;
