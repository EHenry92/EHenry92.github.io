import React, {Component} from 'react';
import './style.css';

const introMessage = "I'M EVLIS HENRY, A DEVELOPER, ENTHUSIASTIC PUZZLE SOLVER AND NATURALLY CURIOUS INDIVIDUAL.";

class Home extends Component {
  state={
    words: introMessage.split(' ').map(word => word.split('')),
    holder: {}
  }
  componentDidMount() {
    this.shuffleAlpha();
  }

  shuffleAlpha = () => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let randAlpha = alphabet.slice();
    let holder = {};
    for (var i = randAlpha.length - 1; i > 0; i--) {
      var rand = Math.floor(Math.random() * (i + 1));
      var temp = randAlpha[i];
      randAlpha[i] = randAlpha[rand];
      randAlpha[rand] = temp;
    }
    for (let k = 0; k < alphabet.length; k++) {
      holder[alphabet[k]] = randAlpha[k];
    }
    this.setState({randAlpha, holder});
  }

  startReveal = evt => {
    evt.preventDefault();
    const {randAlpha} = this.state;
    document.getElementById('startUp').style.display = 'none';
      let waitTime = 500;
      for (let i = 0; i < this.state.randAlpha.length; i++) {
        setTimeout(() => {this.revealLetter(randAlpha[i])}, waitTime * i )
    }
  }
  revealLetter = letter => {
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
  enterChar = evt => {
    evt.preventDefault();
    let input = evt.target.value ? evt.target.value[0].toUpperCase() : '';
    let spots = document.getElementsByClassName(evt.target.name);
    if (input == evt.target.name[0]) {
      this.revealLetter(input);
      this.lowlight();
    }
    for (let i = 0; i < spots.length ; i++) {
      spots[i].firstChild.value = input;
    }
  }
  highlight = (evt) => {
    evt.preventDefault();
    const spots = document.getElementsByClassName(evt.target.name);
    for (let i = 0; i < spots.length ; i++) {
      spots[i].classList.add('highlight-char-input');
    }
  }
  lowlight = () => {
    let oldSpots = document.getElementsByClassName('highlight-char-input');
    for (let j = oldSpots.length; j > 0 ; j -= 1) {
      oldSpots[0].classList.remove('highlight-char-input');
    }
  }
  render = () => {
    let {words, holder} = this.state;
    return (
      <div>
        <div>
        <div id="pic-box">
        <img id="p1" src="/src/images/split1.png" />
        <img id="p2" src="/src/images/split2.png" />
        <img id="p3" src="/src/images/split3.png" />
        <img id="p4" src="/src/images/split4.png" />
        </div>
        <div id="intro-box">
            <div id="main-name">
              <div>Evlis Henry<span className="spotlight">  Software Engineer</span></div>
            </div>
            <div className="center">
              <button id="startUp-mobile" onClick= {this.startReveal}> Show Message </button>
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
                              <input
                                  name={`${char}spot`}
                                  onChange={this.enterChar}
                                  onMouseEnter={this.highlight}
                                  maxLength= {1}
                                  onMouseLeave={this.lowlight}
                                  />
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
              <button id="startUp" onClick= {this.startReveal}> Show Message </button>
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
    )};
  }

export default Home;
