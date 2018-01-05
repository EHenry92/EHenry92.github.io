import React from 'react';

const Home = () => {

  function startReveal (evt) {
      evt.preventDefault();
      document.getElementById('startUp').disabled = true;
        let list, cryptList, textnode, waitTime = 1000;
        for (let i = 0; i < revealOrder.length; i++) {
          setTimeout(() => {
            list = document.getElementsByClassName(`${revealOrder[i]}spot`);
            cryptList = document.getElementsByClassName(`${revealOrder[i]}letter`);

            for (let j = 0; j < list.length; j++) {
              textnode = document.createTextNode(`${revealOrder[i]}`);
              list[j].removeChild(list[j].firstChild);
              list[j].appendChild(textnode);
              cryptList[j].classList.add('solved');
            }
          }, waitTime * i )
      }
    }
    function enterChar(evt) {
      evt.preventDefault();
      let spots = document.getElementsByClassName(evt.target.name);
      for (let i=0; i<spots.length ; i++) {
        spots[i].firstChild.value = evt.target.value.toUpperCase();
      }
    }

    let words = "HEY, I'M EVLIS HENRY. I'M A DEVELOPER, ENTHUSIASTIC PUZZLE SOLVER AND LIFE LONG LEARNER.".split(' ').map(word => {return word.split('')});
    let revealOrder = ['E', 'V', 'L', 'I', 'S', 'H', 'N', 'R', 'Y', 'A', 'B', 'C', 'D', 'F', 'G', 'J', 'K', 'M', 'O', 'P', 'Q', 'T', 'U',  'W', 'X',  'Z'];
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
    for (let i = 0; i < alphabet.length; i++) {
      holder[alphabet[i]] = randAlpha[i];
    }


      return (
        <div>
        <img className ="pic" src="client/components/images/mnwmeout.png" />
        <div id="intro" className="contained">
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
                            <input name={`${char}spot`} onChange={enterChar} maxLength= {1} />
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
          <div className="center">
            <button id="startUp" className="center" onClick= {startReveal}> Solution </button>
          </div>
          </div>
      )
  }

export default Home;
