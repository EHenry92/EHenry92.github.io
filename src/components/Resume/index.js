import React from 'react';
import Contact from '../Common/Contact';
import SlideDisplay from '../Common/SlideInOut';
const resumeData = [
  {
    heading: 'Technical Skills',
    symbol: 'build',
    headingId: 'technical-skills'
    ,
    data: [
      {
        title: 'Proficient:',
        company: 'JavaScript, Node.js, Express.js, HTML5, React, Sequelize, Git, CSS'
      },
      {
        title: 'Familiar:',
        company: 'PostgreSQL, SQL, Redux, Python, React Native, WebSocket'
      },
      {
        title: 'Experience:',
        company: 'JQuery, C++, Bootstrap, Ruby, MongoDB, Tessel.io, '
      }
    ]
  }
  ,{
    heading: 'Projects',
    symbol: 'apps',
    headingId: 'projects',
    data: [
          {
            title: 'TightSchedule',
            company: 'Sole Developer',
            date: '',
            info: "A mobile app that helps users organize and stay on top of a time blocked schedule. Mobile notifications inform the user when it is time to switch tasks and the user has the ability to extend a task's time."
          },
          {
            title: 'IdeaStorm',
            company: 'Full-stack Developer',
            date: '09/2017 - 10/2017',
            info:'Working on a team of 4, I created a real time collaboration tool for teams to brainstorm, share and map ideas.',
          },
          {
            title: 'VocabuMemory',
            company: 'Sole Developer',
            date: '09/2017',
            location: '',
            info: 'I participated in a week long hackathon during which I developed a virtual memory game where successful matches are found by pairing a word and its definition.',
          }
        ]
}
,{
  heading: 'Education',
  headingId: 'Education',
  symbol: 'school',
  data: [
      {
        title: 'Web Development',
        company: 'Grace Hopper at FullStack Academy',
        date: '09/2017 - 12/2017',
        location: 'New York, N.Y.',
        info: 'A hightly selective codding immersive program geared towards increasing the presence of women in the C.S. field.'

      },
      {
        title: 'M.S. In Education',
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
}
,{
  heading: 'Experience',
  symbol: 'work',
  data: [
    {
    title: 'Teacher',
    company: 'NYC Department Of Education',
    date: '09/2015 - 12/2017',
    location: 'Brooklyn, N.Y.',
    info: ''
    }
  ]
}
]


const Resume = () => {
  // function myFunction(id) {
  //   var x = document.getElementById(id);
  //    var others = document.getElementsByClassName('tab-content');
  //    for (let i = 0; i < others.length; i++) {
  //        others[i].style.display = 'none';
  //    }
  //    x.style.display = 'block';
  // }
  return (
    <SlideDisplay
      data={resumeData}
      defaultPageDisplay={
        () => (<div className="center">
        <b>
            Evlis Henry
            <br />
            Brooklyn, NY
            <br />
            <span className="social">
            <Contact />
                  <a href="https://s3.amazonaws.com/henryeprofile/Evlis_Henry_Resume.pdf ">
                  <img className="tinyImg" src="src/images/resume_icon.png" />
                  </a>
            </span>
          </b>
        </div>)
      }
      />
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
