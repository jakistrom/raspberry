import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Popup from './Popup/Popup';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default App;
