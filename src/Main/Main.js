import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  enterBtn = (event) => {
    let popup = document.querySelector(".Popup");

    popup.style.cssText = "display: flex;";
    popup.classList.add("fadeIn");
  };

  render() {
    return (
      <main className="Main">
        <div className="Main__content">
          <h1>Raspberry kingdom</h1>
          <button onClick={this.enterBtn} className="Main__enterBtn">
            enter the gates
          </button>
        </div>
      </main>
    );
  }
}

export default Main;
