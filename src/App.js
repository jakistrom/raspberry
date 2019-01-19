import React, { Component } from 'react';
import './App.scss';
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

  closePopup = (event) => {
   
      if (event.target.classList.contains('Popup')){
        this.setState({
          class: 'Popup'
        })
    };
  }
  
  render() {

     return (
      <div className="App">
        <Header/>
        <Main enterBtn={this.enterBtn} />
        <Footer />
        <Popup close={this.closePopup} class={this.state.class}/>
      </div>
    );
  }
}

export default App;
