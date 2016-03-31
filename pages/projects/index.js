/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ProjectLink from '../../components/ProjectLink/ProjectLink';

export default class extends Component {

  render() {
    return (
      <div>
        <ul className="project-list">
          <ProjectLink name="Purnell School" link="http://purnell.org" details="HTML, CSS, JS, GSAP, ScrollMagic" type="fed" />
          <ProjectLink name="Stick-Em-Up jQuery Plugin" link="https://github.com/devinargenta/stick-em-up" details="jQuery" type="git"/>
          <ProjectLink name="React-Spotify-Search" link="http://devinargenta.github.io/spotify-top-songs-react/" details="ReactJS, Spotify API" type="git"/>
          <ProjectLink name="Loomis Chaffee" link="http://loomischaffee.org" details="HTML, CSS, JS" type="fed" />
          <ProjectLink name="Asheville School" link="http://ashevilleschool.org" details="HTML, CSS, JS, Skrollr" type="fed" />
          <ProjectLink name="Highland School" link="http://www.highlandschool.org/" details="HTML, CSS, JS" type="fed" />
        </ul>
      </div>
    );
  }

}
