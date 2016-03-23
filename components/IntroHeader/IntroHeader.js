import React, {Component} from 'react';
import './IntroHeader.scss';

export default class extends Component {
  render() {
    return (
      <div className="intro-header">
        <img src="logo.png" width="150"/>
        <h1>Devin Argenta</h1>
        <h2>Front End Web Developer</h2>
        <p>Currently Senior Front End @Finalsite</p>
        <p>Interested in: React, Node, and snacks...</p>
          <div className="email">
            <svg className="email-icon" style={{width: 20, height: 18}} version="1.1" x="0px" y="0px"
             viewBox="0 0 20 20" >
             <path d="M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514c0.328,0,0.654-0.064,0.906-0.199
              s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z M18.613,7.489
              c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488
              C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z"
              />
          </svg>
          <a href="mailto:devin@devinargenta.com">

devin@devinargenta.com</a>
          </div>
      </div>
    );
  }
}
