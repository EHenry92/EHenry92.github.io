import React from 'react';

const About = () => {
      const favorites = [
        [['Season'], ['Winter', 'Spring', 'Summer', 'Fall']],
        [['Month'], ['October', 'May', 'August', 'February']],
        [['Day'], ['Thursday', 'Friday', 'Tuesday', 'Wednesday']],
        [['Color'], ['turquoise', 'coral', 'eggshell', 'aqua']],
      ]
      const answers = {
        Season: 'Fall',
        Month: 'October',
        Day: 'Thursday',
        Color: 'turquoise'
      }
      function showAnswer (evt) {
        evt.preventDefault();
        console.log(evt.target.innerHTML);
        const targ = evt.target;
        const category = `${targ.className}`.split(' ')[0];
        const els = document.getElementsByClassName(category);
        for (let i = 0; i < els.length; i++) {
          els[i].classList.add('disabled')
        }
        console.log( 'correcto',category + answers[category] + targ.innerHTML)

        if (answers[category] == targ.innerHTML) {
          evt.target.classList.add('correct');
          evt.target.classList.remove('disabled');
        }
        else {
          const correct = document.getElementById(answers[category]).classList;
          correct.add('wrong');
          correct.remove('disabled');
        }

      }

      return (
       <div id="me">
                 <img className ="pic filler" src="client/components/images/rock.png" />
      <div className= "filler" id="bio">
        <h4 className="center">An educator turned programer fueled by my love for problem solving and my desire for continued growth.</h4>
        <p>
          My name is Evlis Henry. I'm a full stack software engineer. I enjoy creating interative web applications that help and allow people to do what they love. I write clean, easy-to-read and efficient code.
        </p>
        <p>
        </p>
        <p>
          I'm a nativ New Yorker but stil love finding new things to do and places to visit. When I'm not coding, I recharge and rejuvenate by watching sci-fi movies, reading thrillers and decifeeing puzzles.
        </p>


        </div>
        <div id="quiz">
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

        </div>
       </div>
      )
  }

export default About;

// light-green darken-1
