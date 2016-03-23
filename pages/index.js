/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Projects from './projects/index';
import IntroHeader from '../components/IntroHeader/IntroHeader.js';

export default class extends Component {

  render() {
    return (
    <div>
        <IntroHeader />
        <Projects />
      </div>
    );
  }

}
