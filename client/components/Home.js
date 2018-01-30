/*jshint loopfunc:true */
import React from 'react';

const Home = () => {
  let words = "I'M EVLIS HENRY, A DEVELOPER, ENTHUSIASTIC PUZZLE SOLVER AND NATURALLY CURIOUS INDIVIDUAL.".split(' ').map(word => {return word.split('')});
    let holder = {};
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    function shuffleAlpha(alpha) {
      let array = alpha.slice();
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
        return array;
    }
    let randAlpha = shuffleAlpha(alphabet);
    function startReveal (evt) {
      evt.preventDefault();
      document.getElementById('startUp').style.display = 'none';
        let waitTime = 500;
        for (let i = 0; i < randAlpha.length; i++) {
          setTimeout(() =>{revealLetter(randAlpha[i])}, waitTime * i )
      }
    }
    function revealLetter (letter) {
      let list, cryptList, textnode;
      list = document.getElementsByClassName(`${letter}spot`);
            cryptList = document.getElementsByClassName(`${letter}letter`);

            for (let j = 0; j < list.length; j++) {
              textnode = document.createTextNode(`${letter}`);
              list[j].removeChild(list[j].firstChild);
              list[j].appendChild(textnode);
              cryptList[j].classList.add('solved');
            }
    }
    function enterChar(evt) {
      evt.preventDefault();
      let input = evt.target.value ? evt.target.value[0].toUpperCase() : ' ';
      let spots = document.getElementsByClassName(evt.target.name);

      for (let i = 0; i < spots.length ; i++) {
        if (input == evt.target.name[0]) {
          revealLetter(input)
        }
        spots[i].firstChild.value = input;
      }
    }
    function highlight(evt) {
      evt.preventDefault();
      const spots = document.getElementsByClassName(evt.target.name);
      for (let i = 0; i < spots.length ; i++) {
        spots[i].classList.add('highlight-char-input');
      }
    }
    function lowlight(evt) {
      evt.preventDefault();
      let oldSpots = document.getElementsByClassName('highlight-char-input');
      for (let j = oldSpots.length; j > 0 ; j -= 1) {
        oldSpots[0].classList.remove('highlight-char-input');
      }
    }
    for (let i = 0; i < alphabet.length; i++) {
      holder[alphabet[i]] = randAlpha[i];
    }
      return (
        <div>
        <div>
         <div id="pic-box">
         <img id="p1" src="/client/components/images/split1.png" />
         <img id="p2" src="/client/components/images/split2.png" />
         <img id="p3" src="/client/components/images/split3.png" />
         <img id="p4" src="/client/components/images/split4.png" />


        </div>
          <div id="intro-box">
              <div id="main-name">
                <div>Evlis Henry<span className="spotlight">  Software Engineer</span></div>
              </div>

              <div id="message" >
                {
                  words.map((word, wordIdx) => {
                    return (
                      <div className="word" key={word + wordIdx}>
                        {
                      word.map((char, idx) => {
                        let block =
                      holder[char] ?
                          (<span className="crypto char" key={char + wordIdx + idx}>
                              <div className={`${char}spot cryptoReveal`}>
                                <input name={`${char}spot`} onChange={enterChar} onMouseEnter={highlight} maxLength= {1} onMouseLeave={lowlight}/>
                              </div>
                              <div className={`${char}letter cryptoLetter`}>{holder[char]}</div>
                          </span>)
                        :
                          (<span key={char + wordIdx + idx}>
                            <div className={`${char}spot`}>{char}</div>
                              <div className={'cryptoPunct'} />
                          </span>)
                        ;
                        return block;
                      })
                    }
                      </div>
                    )
                  })
                }
                
              </div>
            </div>
            <br />
              <div className="center">
                <button id="startUp" onClick= {startReveal}> Show Message </button>
                </div>
            <br />
            <div>
            <a href="#about-section"> 
              <div  className="center-text">
                  <div>More about me</div>
                  <i className="material-icons">keyboard_arrow_down</i>
              </div>
            </a>
            </div>
        </div>
        </div>
      );
  };

export default Home;
