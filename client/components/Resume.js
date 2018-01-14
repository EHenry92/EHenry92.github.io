import React from 'react';
import {Contact} from './index';

const Resume = () => {
  const resumeData = [
    [
      [
        {
          heading: 'Technical Skills',
          symbol: 'build'
        }
      ],
      [
        {
          title: 'Proficient:',
          company: 'JavaScript, Node.js, Express.js, HTML5, React, Sequelize, Git'
        },
        {
          title: 'Familiar:',
          company: 'Tessel.io, PostgreSQL, SQL, Redux, Ruby, React-Redux'
        },
        {
          title: 'Experience:',
          company: 'Java, Socket.io, JQuery, C++, Bootstrap, Ruby, MongoDB'
        }
      ]
    ],
    [
      [
        {
          heading: 'Projects',
          symbol: 'apps'
        }
      ],
      [
        {
          title: 'IdeaStorm',
          company:'Full-stack Developer',
          date: '9/2017 - 10/2017',
          list: ['A real time collaboration tool for teams to brainstorm, share and map ideas.',
            'I developed back end routes and models using Sequelize, Express.js and Socket.io',
            'I designed and implemented the features and styles of collaboration board using Materialize, Bootstrap, React and Redux.'],
        },
        {
          title: 'VocabuMemory',
          company: 'Sole Developer',
          date: '9/2017',
          location: '',
          list: ['A virtual memory game where successful matches are found by pairing a word and its definition.',
          'Sole developer'],
        }
      ]
    ],
    [
      [
        {
          heading: 'Education',
          symbol: 'school'
        }
      ],
      [
        {
          title: 'Web Development Certificate',
          company: 'Grace Hopper at FullStack Academy Of Code',
          date: '09/2017 - 12/2017',
          location: 'New York, N.Y.',
          list: ['Completed a 17-week, immersive software engineering program for women.',
            'Designed and implemented applications in both group and individual settings.',
            'Participated in Stackathon.'],

        },
        {
          title: 'M.S. In Adolescent Education',
          company: "St.John's University",
          date: '06/2015 - 05/2017',
          location: 'Queens, N.Y.'
        },
        {
          title: 'B.A. in Computer Science',
          company: 'CUNY Hunter College',
          date: '08/2010 - 05/2014 ',
          location: 'New York, NY',
          info: 'Courses: \n Analysis & Design, Computer Architecture,Computer Forensics, Database Management, Operating Systems,Relational Database & SQL Programming,Statistics ',
        }
      ]
    ],
    [
      [
        {
          heading: 'Experience',
          symbol: 'work'
        }
      ],
      [
        {
        title: 'Pre-Algebra Teacher',
        company: 'Van Siclen Community Middle School',
        date: '09/2016 - 12/2017',
        location: 'Brooklyn, N.Y.',
        list: ['Designed, developed and implemented math lessons to general and special education classrooms of up to 30 students.',
          'Conducted individual and group tutoring in an after-school setting.']
        },
        {
          title: 'Math Teacher',
          company: 'Peace Academy Middle School',
          date: '09/2017 - 12/2017',
          location: 'Brooklyn, NY',
          list: ['Improved student math state test scores to 80% of students meeting standards.']

        },
        {
          title: 'Teaching Fellow',
          company: 'NYC Teaching Fellows',
          date: '05/2016 - 12/2017',
          location: 'New YORK, N.Y.',
          list: ['Co-taught english lessons to a classrom of English Language Learners',
            'Conducted individual and group tutoring in an after-school setting.']
          },
        {
          title: 'Customer Service Associate',
          company: "Lowe's Home Improvement",
          date: '09/2017 - 12/2017',
          location: 'Brooklyn, NY',
          list: ['Worked with a team to increase department sales and identify customer needs',
            'Collaborated on and designed creative idea projects',
            'operated and managed heavy machinery'],

        }
      ]
    ]
  ]
  function showData(evt) {
    evt.preventDefault();
    let active = document.getElementsByClassName('active')[0]
    if (active) {active.classList.remove('active');}
    let body = document.getElementById(`${evt.target.id}body`);
    if (body && active !== body) {body.classList.add('active');}
  }

  return (
    <div className="center swirled">
      <ul id="collapsible">
          <li id="top" className="center">
          <b>
              Evlis Henry
              <br />
              Brooklyn, NY
              <br />
              <span className="social">
              <Contact />
                    <a href="/public/Evlis_Henry_Resume_Web.pdf">
                    <img className="tinyImg" src="client/components/images/resume_icon.png" />
                    </a>
              </span>
            </b>
          </li>
            {
              resumeData.map(box => {
                //box[0] == heading
                //box[1]  == info to display
                return (
                <li key={box[0][0].heading} onClick={showData} id={box[0][0].heading} >
                  <div className="collapsible-header">
                    <i className="material-icons">{box[0][0].symbol}</i>
                    <span className="heading">{box[0][0].heading}</span>
                  </div>
                  <div id={`${box[0][0].heading}body`}className="collapsible-body"><span>
                    <table>
                      <tbody>
                        {
                          box[1].map(row => {
                            return (
                              <tr key={row.company}>
                              <td className='row'>
                                <div className="left-col">
                                  <b className="title">{row.title}</b>
                                  {
                                    row.date &&
                                      <div>
                                        <i>
                                          {row.date}
                                          {
                                            row.location &&
                                            <div>
                                              <br />
                                            {row.location}
                                            </div>
                                          }
                                        </i>
                                      </div>
                                  }
                                </div>
                                <div className="right-col">
                                  <b className="company">{row.company}</b>
                                  {
                                    row.list ?
                                    <ul className="data">
                                      {
                                        row.list.map(item => {
                                          return (
                                            <li key={item}>{item}</li>
                                          )
                                        })
                                      }
                                    </ul>
                                    :
                                    <div className="data">
                                    {row.info}
                                      </div>
                                  }
                                </div>
                              </td>
                          </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
            </span></div>
                </li>
                )
              })
            }
        </ul>
    </div>
  )
};

export default Resume;
// {
//   title: '',
//   company: '',
//   date: '',
//   location: '',
//   list: [],
//   info: ''
// }
