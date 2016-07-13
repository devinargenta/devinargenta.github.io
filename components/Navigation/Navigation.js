/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';
/**
<li className="Navigation-item">
  <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
</li>
<li className="Navigation-item">
  <a className="Navigation-link" href="/blog" onClick={Link.handleClick}>Blog</a>
</li>
<li className="Navigation-item">
  <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
</li>
// <li className="Navigation-item">
//   <a className="Navigation-link" href="/resume" onClick={Link.handleClick}>Resume</a>
// </li>
*/

function Navigation() {
  return (
    <ul className="Navigation" role="menu">

      <li className="Navigation-item">
        <a className="Navigation-link" target="_blank" href="http://github.com/devinargenta">Github</a>
      </li>

      <li className="Navigation-item">
        <a className="Navigation-link" target="_blank" href="http://twitter.com/thegddmndevin">Twitter</a>
      </li>

      <li className="Navigation-item">
        <a className="Navigation-link" href="mailto:devin@devinargenta.com">E-Mail</a>
      </li>
    </ul>
  );
}

export default Navigation;
