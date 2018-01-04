import React from 'react';

const Home = () => {

  $(document).ready(function() {
      let list, textnode, waitTime = 1500;
      for (let i = 0; i < revealOrder.length; i++) {
        setTimeout(() => {
          list = document.getElementsByClassName(`${revealOrder[i]}spot`);
        for (let j = 0; j < list.length; j++) {
          textnode = document.createTextNode(`${revealOrder[i]}`);
          list[j].removeChild(list[j].firstChild);
          list[j].appendChild(textnode);
          // list[j].innerHTML= `${revealOrder[i]}`;
        }
        }, waitTime * (i + 1))

      }
  });
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


  let sayings =
  "HEY, I'M EVLIS HENRY. I'M A DEVELOPER, ENTHEUSASTIC PUZZLE SOLVER AND LIFE LONG LEARNER.".split('');

      return (
       <div className = "container">
       <div id="intro">
       {
          sayings.map((char, idx) => {
            let block =
            holder[char] ?
                (<span className="crypto char" key={char + idx}>
                    <div className={`${char}spot cryptoReveal`}>_</div>
                    <div className={'cryptoLetter'}>{holder[char]}</div>
                </span>)

              :
                (<span className="crypto" key={char + idx}>
                  <div className={`${char}spot`}>{char}</div>
                    <div className={'cryptoPunct'} />
                </span>)
              ;
              return block;

          })
      }
      </div>
      </div>
         )
  }

export default Home;

// light-green darken-1
