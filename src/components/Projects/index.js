import React from 'react';
import './styles.css';

const Projects = () => {
    const creations = [[
      {
        name: 'Tight Schedule',
        mobile: true,
        code: 'https://github.com/EHenry92/TightSchedule',
        images: ['src/images/tightScheduleLogin.png',
          'src/images/tightSchedule.png',
        'src/images/tightScheduletasks.png'
        ],
        smallDesc: 'A mobile app to organize and control time blocked schedules',
        largeDesc: "A React-Native app that helps users organize and stay on top of a time blocked schedule. Notifications inform the user when it is time to switch tasks, also allowing a user to extend a task's time. A user is able to store, edit and reorder multiple schedules.",
        tech: 'React Native, React, Firebase, Javascript',
        initials: 'ts',
        date: 'Feb. 18 - Present',
        contribution: ['Sole developer'],
        challenges: []
      },
      {
        name: 'IdeaStorm',
        site: 'http://idea-storm.herokuapp.com/',
        code: 'https://github.com/EHenry92/meeb',
        images: ['src/images/ideastormlogo.png',
        'src/images/ideaStormRoom.png'
        // ,'src/images/ideaStormHome.png'
        ],
        smallDesc: 'A virtual brainstorming tool for teams.',
        largeDesc: 'A real-time collaboration tool for teams to share, discuss and connect ideas. Ideas can be organized using color coding, branching, positioning and columns. Team members can add, delete and vote on ideas.',
        tech: 'React, Redux, AWS, D3.js, React-Redux, Sequelize.js',
        initials: 'is',
        date: 'Nov. 17 - Dec. 17',
        contribution: ['Designed database models and backend routes', 'Designed form to create new collaboration room', 'Implemented real-time idea creation and sharing', 'Implementing voting functionality and result display', 'Implemented real-time attendance functionality', 'Wrote frontend and backend tests']
      },
      {
        name: 'VocabuMemory',
        site: 'http://vocabumemory.herokuapp.com/',
        code: 'https://github.com/EHenry92/VocabuMemory',
        images: ['src/images/VocabuMemory.png', 'src/images/vocabuMemoryGame.png' ],
        smallDesc: 'A virtual memory matching card game.',
        largeDesc: 'A responsive web application to strengthen vocabulary skills and exercise your memory. VocabuMemory is a memory card game in which successful matches are found by pairing a word with its definition. Games can be played according to the difficulty of the words or content categories.',
        tech: 'React, Redux, React-Redux, Sequelize, CSS, Express.Js',
        initials: 'vm',
        date: 'Nov. 17',
        contribution: ['Sole developer', 'Independently engineered frontend and backend components']
      },
      {
        name: 'Pairs of Sum',
        video: 'https://www.youtube.com/embed/zLDIPqjw4hE?rel=0',
        smallDesc: 'A walkthrough of the Pairs of Sum problem using Sets.',
        largeDesc: 'Problem: Design an algorithm which finds all pairs of numbers in an array that sum to a specific value.',
        date: 'Oct. 17',
        initials: 'ps'
      },
      {
        name: 'Dunder Mifflin Inc.',
        site: 'https://dundermifflininc.herokuapp.com/',
        code: 'https://github.com/EHenry92/dunder_mifflin',
        images: ['src/images/dunderMifflinHome.png', 'src/images/dunderMifflincart.png'],
        smallDesc: 'An ecommerce website for a paper company.',
        largeDesc: 'An ecommerce single page, responsive web application  for the a paper company.',
        tech: 'React, Redux, React-Redux, Materialize, Material-UI, Sequelize',
        initials: 'dm',
        date: 'Oct. 17',
        contribution: ['Crafted database models and backend routes for shopping cart', 'Designed user experience for shopping cart view and checkout page view', 'Implemented client and server side functionality for shopping cart and checkout pages', 'Wrote backend test']
      }
    ], [
      {
        name: 'Text Animation',
        smallDesc: 'A text animation using Adobe Flash.',
        video: 'https://www.youtube.com/embed/H2PtXYG5kdg',
        tech: 'Adobe Flash CS3',
        initials: 'ta',
        date: 'Oct. 2010'
      },
      {
        name: 'Perspective',
        images: ['src/images/project/image1.jpg', 'src/images/project/image2.jpg', 'src/images/project/image3.jpg', 'src/images/project/image3_5.jpg', 'src/images/project/image4.jpg'],
        smallDesc: '',
        largeDesc: 'Using Photoshop I added texture, depth and color to hand drawn images.',
        tech: 'Adobe Photoshop CS3',
        initials: 'ks',
        date: 'May 2010',
      },
      {
        name: 'Snowman Animation',
        video: 'https://www.youtube.com/embed/9ueSUaybqhk',
        smallDesc: 'An image animation using Adobe Flash.',
        // largeDesc: "Using Adobe Flash's images and shapes, I created  an animated video",
        tech: 'Adobe Flash CS3, Adobe Photoshop CS3',
        initials: 'sa',
        date: 'Oct. 2009'
      },
      {
        name: 'Vectored Picture',
        images: ['src/images/vecp.png'],
        smallDesc: 'A photo made with vectored shapes.',
        largeDesc: 'Using Adobe Illistrator, I used vectored shapes, blending and coloring to recreate a photo of myself.',
        tech: 'Adobe Illistrator CS3',
        initials: 'vp',
        date: 'March. 2008'
      }

    ]];
    const prefixes = ['vm', 'is', 'dm', 'ps', 'ta', 'sa', 'ks', 'vp'];
    let indexes = [0, 0, 0, 0, 0, 0, 0, 0];
    prefixes.forEach((proj, idx) => {
      const images = document.getElementsByClassName(`carousel-image ${proj}`);
      setInterval(() => {
        if (images.length > 1) {
          images[indexes[idx]].classList.add('hidden');
          indexes[idx]++;
            if (indexes[idx] === images.length) {indexes[idx] = 0;}
          images[indexes[idx]].classList.remove('hidden');
        }
      }, 3500);
    })
    function showData (evt) {
      evt.preventDefault();
      let clickedCard = document.getElementsByClassName(`reveal ${evt.target.name}`)[0].classList;
      clickedCard.add('show-reveal');
    }
    function hideData (evt) {
      evt.preventDefault();
      let clickedCard = document.getElementsByClassName(`reveal ${evt.target.name}`)[0].classList;
      clickedCard.remove('show-reveal');
    }
    return (
        <div>
       <div >
        {

          creations.map((timeperiod, cidx) =>
            (<div className="contained" key={timeperiod[0].name}>
            <div>
              {
                cidx == 0 ?
                  <div>
                    <h2 style={{margin: 0}}>Recent Projects</h2>
                    <h4> Sept. 2017 - present</h4>
                  </div>
                  :
                  <div>
                    <h2 style={{margin: 0}}>Other Work</h2>
                    <h4> Aug. 2008 - June 2011</h4>
                  </div>
              }

            </div>
            {
              timeperiod.map((item) =>
                (<div className="card" key={item.name}>
                  <div className="card-face" >
                  {displayMedia(item)}
                      <div className="card-content">
                        <span>
                          <div className="card-title">{item.name}</div>
                          <p>{item.smallDesc}</p>
                          <button className="material-icons right" name={item.initials} onClick={showData}>more_vert</button>
                        </span>
                        <p>
                        {
                          item.site && <a href={item.site} >site </a>
                        }
                        {
                          item.code && <a href= {item.code} >code</a>
                        }
                        </p>
                      </div>
                  </div>
                  <div className={`reveal ${item.initials}`}>
                      <br />
                    <span><div className="card-title center">{item.name}</div> <button className="right" name={item.initials} onClick={hideData}>X</button></span>
                  <div className="reveal-data">
                    <div>{item.date}</div>
                    <p>{item.largeDesc}</p>
                    {
                      item.contribution &&
                      <div>
                        <b>My Contribution:</b>
                        <ul>
                          {
                            item.contribution.map(task => {
                              return <li key={task}>{task}</li>
                            })
                          }
                        </ul>
                      </div>
                    }
                    {
                      item.challenges &&
                      <div>
                        <b>Challenges:</b>
                        <ul>
                          {
                            item.challenges.map(task => {
                              return <li key={task}>{task}</li>
                            })
                          }
                        </ul>
                      </div>
                    }
                    {
                      item.tech && <a>Tech: {item.tech}</a>
                    }
                  </div>
                  </div>
                </div>)
              )
            }
          </div>))
      }
      </div>

      </div>
      )
    }
export default Projects;


const displayMedia = (proj) => {
  if (proj.mobile) {
    return (
      <div className="carousel">
      {
        proj.images.map((image) => {
          return (
          <img key={image} className={`carousel-image ${proj.initials} mobile-image`} src={image} />
          )
        })
      }
    </div>
    )
  }
  else if (proj.images) {
   return (
    <div className="carousel">
      {
        proj.images.map((image, idx) => {
        return (
        idx === 0 ?
        <img key={image} className={`carousel-image ${proj.initials}`} src={image} />
        :
        <img key={image} className={`carousel-image ${proj.initials} hidden`} src={image} />
      )
      })
      }
    </div>
    )
  }
  else {
    return <iframe src={proj.video} frameBorder="0" allow="encrypted-media" allowFullScreen />
  }
}

// {
//   name: '',
//   site: '',
//   code: '',
//   images: [],
//   smallDesc: '',
//   largeDesc: '.',
//   tech: '',
//   initials: '',
//   date: ''
// }
