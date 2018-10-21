import React from 'react';
import Contact from '../Common/Contact';
import './styles.css';

const aboutMe = {
  mainText: 'An educator turned developer.',
  paragraphs: [
    "My name is Evlis Henry. I'm a software engineer fueled by a love for problem solving and the desire for continued growth. I enjoy working on projects that solve problems, projects that encourage and projects that equip people with the tools to do what they love. My strong attention to detail allows me to efficiently trace and debug code in addition to write code that is clean and easy to understand.",
    'I am a C.S. grad with a bachelors degree from Hunter College. After college, I persued my initial passion of education and taught middle school math. Teaching, made me accutely aware of the poer of technology and the need for greater access and tools to reach students at their various levels.',
    "When I'm not coding, I recharge and rejuvenate by watching sci-fi movies, reading thrillers and deciphering puzzles."
  ]
}

const About = () => {
      return (
       <div id="me">
          <div className="img-container">
          <img className= "about-pic" src="src/images/bigRock.jpg" />

          </div>

            <div id="bio-container">
            <div id="bio">

              <p className="center-text"><b>
                {aboutMe.mainText}
                </b></p>
              {
                aboutMe.paragraphs.map(text =>
                  <p key={text}>{text}</p>
                )
              }

                <Contact />
            </div>
            </div>

       </div>
      );
  };

export default About;
