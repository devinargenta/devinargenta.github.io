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
      </div>
    );
  }
}
