import React from "react";
import "./styles.css";

const texts = {
  name: "Evlis Henry",
  about: "About",
  projects: "Projects",
  resume: "Resume"
};

const Main = () => {
  function burgerToggle() {
    let linksEl = document.getElementById("slide-space");
    if (linksEl.style.display === "flex") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "flex";
    }
  }

  return (
    <div id="header">
      <nav onClick={burgerToggle}>
        <a id="name" href="/">
          {texts.name}
        </a>
        <img id="menu" src="docs/images/menu.png" />
        <div id="slide-space">
          <div id="slide-out" className="tic">
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
export default Main;
