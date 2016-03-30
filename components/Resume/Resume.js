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
          <div><span className="date">{work.startDate}
            - {work.endDate}</span></div>
          <h4>{work.position}</h4>
          <h4 className="company">{work.company}</h4>

          <div><a href={work.website}>{work.website}</a></div>
          <p className="summary">{work.summary}</p>
          <h5>Highlights</h5>
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
                  <a href="mailto:devin@devinargenta.com">{basics.email}</a>
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

        <section id="work" className="row">
          <div className="col-sm-4">
            <section id="about" className="row">

                <h3>About</h3>

              <div >
                <p>{basics.summary}</p>
              </div>
            </section>
              <div >
                <h3>Skills</h3>
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
              <section id="awards" className="row">
                <aside>
                  <h3>Awards</h3>
                </aside>
                <div>

                  {Data.awards.map((award) => {
                    return (
                      <div >
                        <div className="name">
                          <h4>{award.title}</h4>
                        </div>
                        <div className="awarder">
                          {award.awarder}
                        </div>
                        <div className="date">
                          {award.date}
                        </div>

                      </div>
                    );
                  })}
                </div>

            </section>
          </div>

          <div className="col-sm-8">
            <div ><h3>Experience</h3></div>
            <div >{this.getWork()}</div>
            </div>
          </section>


      </div>

    );
  }

}
