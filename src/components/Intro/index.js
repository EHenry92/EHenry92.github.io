import React, { Component } from "react";
import "./style.css";
import shuffleAlpha from "./randomizeAlpha";
import WithFetch from "../HOC/withFetch";
import Char from "./Char";

const file_location = "message.txt";
const alphaPairs = shuffleAlpha();
const parseFunction = message =>
  message.map(word => word.toUpperCase().split(""));

const texts = {
  name: "Evlis Henry",
  jobTitle: "Software Engineer",
  buttonText: "View Message",
  moreInfo: "Learn More"
};

class Home extends Component {
  state = {
    activeChar: "",
    inputs: {},
    isRevealed: false,
  };

  startReveal = () => {
    let waitTime = 600;
    this.setState({isRevealed: true})
    Array.from(alphaPairs.values()).forEach((value, idx) => {
      setTimeout(() => {
        this.revealLetter(value);
      }, waitTime * idx);
    });
  };

  revealLetter = letter => {
    let { inputs } = this.state;
    inputs[alphaPairs.get(letter)] = letter;
    this.setState({ inputs });
  };

  enterChar = evt => {
    evt.preventDefault();
    const input = evt.target.value ? evt.target.value[0].toUpperCase() : "";
    const mask = evt.target.name;

    let { inputs } = this.state;

    if (input) {
      inputs[mask] = input;
    } else {
      delete inputs[mask];
    }

    this.setState({ inputs });
  };

  highlight = evt => {
    evt.preventDefault();
    const activeChar = evt.target.name;
    this.setState({ activeChar });
  };

  lowlight = () => {
    this.setState({ activeChar: "" });
  };

  revealButton = (isMobile) => {
    return (
      <div className="center">
        <button id={isMobile ? "startUp-mobile" : "startUp"}
          onClick={this.startReveal}
          disabled={this.state.isRevealed}
        >
          {texts.buttonText}
        </button>
      </div>
    );
  };

  render = () => {
    const words = this.props.data;
    return (
      <div>
        <div>
          <div id="pic-box">
            <img id="p1" src="/docs/images/split1.png" />
            <img id="p2" src="/docs/images/split2.png" />
            <img id="p3" src="/docs/images/split3.png" />
            <img id="p4" src="/docs/images/split4.png" />
          </div>
          <div id="intro-box">
            <div id="main-name">
              {texts.name}
              <span className="main-title">{texts.jobTitle}</span>
            </div>
            {this.revealButton(true)}
            <div id="message">
              {words &&
                words.map((word, wordIdx) => {
                  return (
                    <div className="word" key={word + wordIdx}>
                      {word.map((char, idx) => {
                        const mask = alphaPairs.get(char);
                        return alphaPairs.get(char) ? (
                          <Char
                            key={char + wordIdx + idx}
                            onChange={this.enterChar}
                            highlight={this.highlight}
                            lowlight={this.lowlight}
                            hiddenValue={char}
                            mask={mask}
                            state={this.state.inputs[mask] || ""}
                            isActive={mask === this.state.activeChar}
                          />
                        ) : (
                          <span key={char + wordIdx + idx}>
                            <div>{char}</div>
                            <div className={"cryptoPunct"} />
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </div>
          <br />
          {this.revealButton(false)}
          <br />
          <div className="next-section center-text">
            <a href="#about-section">
              {texts.moreInfo}
              <i className="material-icons">keyboard_arrow_down</i>
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default WithFetch(file_location, parseFunction)(Home);
