import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Countdown from 'react-countdown';

import logoImage from "./assets/logo.png"
import motifImage from "./assets/motif.png"

import 'bootstrap/dist/css/bootstrap.css';

import "./index.css"

const countdownRenderer = (props: any) => {
  const { hours, minutes, seconds, completed, days } = props

  if (completed) {
    // Render a completed state
    return <span>Jonjoe forgot to add a finish state!</span>;
  } else {
    // Render a countdown
    return <div className="date">
      <span>{days}</span>
      <span>{hours}</span>
      <span>{minutes}</span>
      <span>{seconds}</span>
    </div>
  }
};

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper" style={{backgroundImage: `url(${motifImage})`}}>
      <img className="logo" src={logoImage} alt="Warcom Logo" />
      
      <div className="date">
        <Countdown renderer={countdownRenderer} date={Date.parse("28 Mar 2021 00:12:00 GMT")}/>
      </div>
        <span>Until Airsoft baby!!!!</span>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
