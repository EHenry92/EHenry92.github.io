/*jshint loopfunc:true */
import React from 'react';

const Home = () => {
  // document.onreadystatechange = () => {
  //   if (document.readyState === 'complete') {
  //     setTimeout(() => {
  //       document.getElementById('startUp').style.display = 'block';
  //     }, 3000)
  //   }
  // };

  function startReveal (evt) {
      evt.preventDefault();
      document.getElementById('startUp').style.display = 'none';
        let list, cryptList, textnode, waitTime = 750;
        for (let i = 0; i < randAlpha.length; i++) {
          setTimeout(() => {
            list = document.getElementsByClassName(`${randAlpha[i]}spot`);
            cryptList = document.getElementsByClassName(`${randAlpha[i]}letter`);

            for (let j = 0; j < list.length; j++) {
              textnode = document.createTextNode(`${randAlpha[i]}`);
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
      for (let i = 0; i < spots.length ; i++) {
        spots[i].firstChild.value = evt.target.value.toUpperCase();
      }
    }

    let words = "HEY, I'M EVLIS HENRY, A DEVELOPER, ENTHUSIASTIC PUZZLE SOLVER AND NATURALLY CURIOUS INDIVIDUAL.".split(' ').map(word => {return word.split('')});
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
          <img className ="pic filler" src="client/components/images/mnwmeout.png" />
          <div id="intro" className="contained filler">

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
              <div>
                <br />
              <button id="startUp" onClick= {startReveal}> Reveal </button>
              </div>

          </div>

        </div>
      )
  }

export default Home;
