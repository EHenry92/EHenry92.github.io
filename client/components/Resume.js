import React from 'react';
import {Link} from 'react-router-dom';

const Resume = () => {

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  return (
    <div className="container">
    <br />
      <ul className="collapsible" data-collapsible="expandable">
          <li className="center">
          <b>
              Evlis Henry
              <br />
              Brooklyn, NY
              <br />
              <div className="social">
                  <span className="category">
                      <Link to="mailto:ehenry692@hotmail.com"><img
                      className= "tinyImg"
                      src="client/components/images/social-mail.png" /></Link>
                  </span>
                  <span className="category">
                    <Link to="https://www.github.com/ehenry92" target="_blank"><img
                    className= "tinyImg"
                    src="client/components/images/social-git.png" /></Link>
                  </span>
                  <span  className="category">
                    <Link to="https://www.likedin.com/in/evils-henry" target="_blank"><img  className= "tinyImg" src="client/components/images/social-linked.png" /></Link>
                  </span>
              </div>
            </b>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">build</i>Technical Skills</div>
            <div className="collapsible-body"><span>
            <table>
              <tbody>
                <tr>
                <th> Proficient </th>
                <td> JavaScript, Node.js, Express.js, HTML5, React, Sequelize, Git </td>
                </tr>
                <tr>
                <th>Familiar</th>
                <td>Tessle.io, PostgreSQL, SQL, Redux, Ruby, React-Redux </td>
                </tr>
                <tr>
                <th>Some Experience</th>
                <td>Java, Socket.io, JQuery, C++, Bootstrap, Ruby, MongoDB</td>
                </tr>
              </tbody>
            </table>
              </span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">apps</i>Projects</div>
            <div className="collapsible-body"><span>
            <table className="bordered">
              <tbody id="projects">
                      <tr>
                        <td>
                          <b className="degType">IdeaStorm</b>
                          <br />
                          <i>09/2017</i>
                        </td>
                        <td>
                          <p>
                            <ul>
                              <li>A real time collaboration tool for teams to brainstorm, share and map ideas.</li>
                              <li>I developed back end routes and models using Sequelize, Express.js and Socket.io</li>
                              <li>I designed and implemented the features and styles of collaboration board using Materalize, Bootstrap, React and Redux.</li>
                            </ul>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="degType">Vocabumemory</b>
                          <br />
                          <i>09/2017</i>
                        </td>
                        <td>
                          <p>
                            <ul>
                              <li>A virtual memory game where successful matches are found by pairing a word and its definition.</li>
                            </ul>
                          </p>
                        </td>
                      </tr>

                  </tbody>
            </table>
            </span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">school</i>Education</div>
            <div className="collapsible-body"><span>
            <table className="bordered">
              <tbody>
                      <tr>
                        <td>
                          <b className="degType">Web Development Certificate</b>
                          <br />
                          <i>
                            09/2017 - 12/2017 <br /> New York, NY</i>
                        </td>
                        <td>
                          <b>Grace Hopper at FullStack Academy of Code </b>
                          <p>
                            Completed a 17-week, immersive software engineering program for women.
                            Designed and implemented applications in both group and individual settings.
                            Participated in Stackathon.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="degType"><b>M.S. in Adolescent Education</b>
                        <br />
                          <i>06/2015 - 05/2017
                          <br />
                          Queens, NY</i>
                        </td>
                        <td><b>St. John's University</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="degType">B.A. Computer Science</b>
                          <br />
                          <i>
                            08/2010 - 05/2014 <br /> New York, NY
                          </i>
                        </td>
                        <td>
                          <b>Hunter College</b>
                           <p>
                          Courses:
                              Analysis & Design,
                              Computer Architecture,
                              Computer Forensics,
                              Database Management,
                              Operating Systems,
                              Relational Database & SQL Programming,
                              Statistics
                          </p>
                        </td>
                      </tr>
                  </tbody>
            </table>
            </span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">work</i>Experience</div>
            <div className="collapsible-body"><span>
                <table className="bordered">
                  <tbody id="experience">
                      <tr>
                        <td>
                          <b className="degType">Pre-Algebra Teacher</b>
                          <br />
                          <i>
                            09/2017 - 12/2017 <br /> Brooklyn, NY</i>
                        </td>
                        <td>
                          <b>Van Siclen Community Middle School
                          </b>
                          <p>
                            <ul>
                              <li>Designed, developed and implemented math lessons to general and special education classrooms of up to 30 students.</li>
                              <li>Conducted individual and group tutoring in an after-school setting.</li>
                            </ul>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="degType">Math Teacher</b>
                          <br />
                          <i>
                            09/2017 - 12/2017 <br /> Brooklyn, NY</i>
                        </td>
                        <td>
                          <b>Peace Academy Middle School
                          </b>
                          <p>
                            <ul>
                              <li>Improved student math state test scores to 80% of students meeting standards </li>
                            </ul>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="degType">Customer Service Associate</b>
                          <br />
                          <i>
                            09/2017 - 12/2017 <br /> Brooklyn, NY</i>
                        </td>
                        <td>
                          <b>Lowe's Home Improvement
                          </b>
                          <p>
                            <ul>
                              <li>Worked with a team to increase department sales and identify customer needs</li>
                              <li>Collaborated on and designed creative idea projects</li>
                              <li>operated and managed heavy machinery</li>
                            </ul>
                          </p>
                        </td>
                      </tr>
                  </tbody>
                </table>
            </span></div>
          </li>
        </ul>
    </div>
  )
};

export default Resume;
