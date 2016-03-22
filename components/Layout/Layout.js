/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import IntroHeader from '../IntroHeader/IntroHeader';
const heart = '<3';
function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      <IntroHeader />
      {children}
      <footer>
        <div>
          Built With React {heart} <br/>
        Boilerplate:
        <a href="https://github.com/koistya/react-static-boilerplate">
          https://github.com/koistya/react-static-boilerplate
        </a>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
