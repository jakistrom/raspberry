import React from 'react';
import "./Main.css";

const Main = (props) => {

    return (
      <main className="Main">
        <div className="Main__content">
          <h1>Raspberry kingdom</h1>
          <button onClick={props.enterBtn} className="Main__enterBtn">
            enter the gates
          </button>
        </div>
      </main>
    );
}

export default Main;
