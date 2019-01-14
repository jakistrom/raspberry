import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Popup from './Popup/Popup';


class App extends Component {

  state = {
    class: 'Popup'
  }

  enterBtn = () => {
    this.setState({
      class: 'Popup fadeIn',
    })
  };

  render() {

     return (
      <div className="App">
        <Header />
        <Main enterBtn = {this.enterBtn}/>
        <Footer />
        <Popup class={this.state.class}/>
      </div>
    );
  }
}

export default App;
