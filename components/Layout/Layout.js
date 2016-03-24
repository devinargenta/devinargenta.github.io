/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Footer from '../SiteFooter/Footer';
function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      {children}
          <Footer />
    </div>

  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
