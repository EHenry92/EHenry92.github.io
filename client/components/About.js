import React from 'react';
import {Contact} from './index';

const About = () => {
      // const favorites = [
      //   [['Season'], ['Winter', 'Spring', 'Summer', 'Fall']],
      //   [['Month'], ['October', 'May', 'August', 'February']],
      //   [['Day'], ['Thursday', 'Friday', 'Tuesday', 'Wednesday']],
      //   [['Color'], ['turquoise', 'coral', 'eggshell', 'aqua']],
      // ]
      // const answers = {
      //   Season: 'Fall',
      //   Month: 'October',
      //   Day: 'Thursday',
      //   Color: 'turquoise'
      // }
      // function showAnswer (evt) {
      //   evt.preventDefault();
      //   console.log(evt.target.innerHTML);
      //   const targ = evt.target;
      //   const category = `${targ.className}`.split(' ')[0];
      //   const els = document.getElementsByClassName(category);
      //   for (let i = 0; i < els.length; i++) {
      //     els[i].classList.add('disabled')
      //   }
      //   console.log( 'correcto',category + answers[category] + targ.innerHTML)

      //   if (answers[category] == targ.innerHTML) {
      //     evt.target.classList.add('correct');
      //     evt.target.classList.remove('disabled');
      //   }
      //   else {
      //     evt.target.classList.add('wrong');
      //     evt.target.classList.remove('disabled');
      //     const correct = document.getElementById(answers[category]).classList;
      //     correct.add('correct');
      //     correct.remove('disabled');
      //   }

      // }

      return (
       <div id="me">
                 <img className ="pic filler" src="client/components/images/rock.png" />

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
      <Contact />
        </div>
        {/* <div id="quiz">
          Find out my favorites?:
          {
            favorites.map(fav => {
              return (
                <div className="list" key={fav[0]}>
                  {fav[0]} :
                  <span className="list" >
                  {
                    fav[1].map(item => {
                      return (<span key={item}><div onClick= {showAnswer} className={`${fav[0]} choices`} id={item} >{item}</div></span>)
                    })
                  }
                  </span>
                </div>
              )
            })
          }

        </div> */}
       </div>
      )
  }

export default About;

// light-green darken-1
