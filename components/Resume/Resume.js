/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, {Component} from 'react';
import Data from './resume.json';
import './Resume.scss';

export default class extends Component {
  getWork() {
    return Data.work.map((work) => {
      return (
        <div className="work-container" key={work.startDate}>
          <h4>{work.company}</h4>
          <span className="position">{work.position}</span>
          <span className="date">{work.startDate}
            - {work.endDate}</span>
          <p className="summary">{work.summary}</p>
          <h4>Highlights</h4>
          <ul>
            {work.highlights.map((highlight) => {
              return (
                <li>{highlight}</li>
              );
            })}
          </ul>
        </div>
      );
    });
  }
  render() {
    const basics = Data.basics;
    return (
      <div id="content" className="container">

        <section id="contact" className="row">
          <aside className="resume-name">
            <h3>{basics.name}</h3>
          </aside>
          <div className="contact-info-container">
              <div className="contact-info">
                <strong>Email</strong>
                <div className="email">
                  <a className="__cf_email__" href="mailto:devin@devinargenta.com">{basics.email}</a>
                </div>
              </div>
              <div className="contact-info">
                <strong>Phone</strong>
                <div className="phone">{basics.phone}</div>
              </div>
              <div className="contact-info">
                <strong>Website</strong>
                <div className="website">
                  <a href={basics.website}>{basics.website}</a>
                </div>
              </div>
          </div>
        </section>
        <section id="about" className="row">
          <aside className="col-sm-3">
            <h3>About</h3>
          </aside>
          <div className="col-sm-9">
            <p>{basics.summary}</p>
          </div>
        </section>
        <section id="profiles" className="row">
          <aside className="col-sm-3">
            <h3>Profiles</h3>
          </aside>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6">
                <strong className="network">
                  {basics.profiles[0].network}
                </strong>
                <div className="username">
                  <div className="url">
                    <a href={basics.profiles[0].url}>{basics.profiles[0].username}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="row">
          {this.getWork()}
        </section>
        <section id="awards" className="row">
          <aside className="col-sm-3">
            <h3>Awards</h3>
          </aside>
          <div className="col-sm-9">

            {Data.awards.map((award) => {
              return (
                <div className="col-sm-6">
                  <div className="name">
                    <h4>{award.title}</h4>
                  </div>
                  <div className="date">
                    {award.date}
                  </div>
                  <div className="awarder">
                    {award.awarder}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="skills" className="row">
          <aside className="col-sm-3">
            <h3>Skills</h3>
          </aside>
          <div className="col-sm-9">
            <div className="row">

              {Data.skills.map((skill) => {
                return (
                  <div className="col-sm-6">
                    <div className="name">
                      <h4>{skill.name}</h4>
                    </div>
                    <ul className="keywords">
                      {skill.keywords.map((key) => {
                        return (
                          <li>{key}</li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

    );
  }

}
