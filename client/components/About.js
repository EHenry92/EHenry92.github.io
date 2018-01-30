import React from 'react';
import {Contact} from './index';

const About = () => {
      return (
        <div>
      
       <div id="me">
      <img className ="pic left filler" src="client/components/images/p1.jpg" />

      <div className= "filler contained" id="bio">
      <p className="center title"><b>An educator turned developer fueled by a love for problem solving and the desire for continued growth.</b></p>
      <p>
        My name is Evlis Henry. I'm a full stack software engineer who enjoys creating interactive applications and helping others. I believe in creating code and products that solve a problem, encourages and equips people with the tools to do what they love. I taught Math at lower performing middle schools where I observed that the right technology had the power to increase learning, communication and engagement in the classroom.
      </p>
      <p>
        I am certified in web development and hold a Bachelors degree in Computer Science from Hunter College. My strong attention to detail allows me to efficeively trace and debug code in addition to write code that is clean and easy to understand. I use each new project as an opportunity to grow and expand my skill set.
      </p>
      <p>
        When I'm not coding, I recharge and rejuvenate by watching sci-fi movies, reading thrillers and deciphering puzzles.
      </p>
        </div>
        <Contact />
       </div>
       </div>
      );
  };

export default About;

// light-green darken-1
