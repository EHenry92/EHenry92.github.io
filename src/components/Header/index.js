import React from "react";
import "./styles.css";
import WithToggle from "../HOC/withToggle";

const texts = {
  name: "Evlis Henry",
  about: "About",
  projects: "Projects",
  resume: "Resume"
};

const Header = ({isToggleOn, handleToggle}) => {
  return (
    <div id="header">
      <nav onClick={handleToggle}>
        <a id="name" href="/">
          {texts.name}
        </a>
        <img id="menu" src="docs/images/menu.png" />
        <div id="slide-space" className={isToggleOn ? "nav-hide" : "nav-show"}>
          <div id="nav-links" className="tic">
            <div className="row top">
              <div className="piece left-col">
                <img src="docs/images/x.png" />
              </div>
              <a href="#brief-intro" className="piece center">
                {texts.name}
                <div className="after" />
              </a>
              <div className="piece right-col">
                <img src="docs/images/o.png" />
              </div>
            </div>
            <div className="row middle">
              <a href="#about-section" className="piece left-col">
                {texts.about}
                <div className="after" />
              </a>
              <div className="piece center">
                <img src="docs/images/x.png" />
              </div>
              <a href="#project-section" className="piece right-col">
                {texts.projects}
                <div className="after" />
              </a>
            </div>
            <div className="row bottom">
              <div className="piece left-col">
                <img src="docs/images/x.png" />
              </div>
              <a href="#resume-section" className="piece center">
                {texts.resume}
                <div className="after" />
              </a>
              <div className="piece right-col">
                <img src="docs/images/o.png" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default WithToggle()(Header);
