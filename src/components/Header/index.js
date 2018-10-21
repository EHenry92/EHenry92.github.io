import React from 'react';
import './styles.css';

const Main = () => {
  function burgerToggle () {
    let linksEl = document.getElementById('slide-space');
    if (linksEl.style.display === 'flex') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'flex';
    }
  }

  return (
      <div id="header">
        <nav onClick={burgerToggle}>
          <a id="name" href="/">
            Evlis Henry
          </a>
          <img  id="menu" src="src/images/menu.png" />
          <div id="slide-space">
            <div id="slide-out"className="tic">
              <div className ="row top">
                <div className="piece left-col">
                  <img src="src/images/x.png" />
                </div>
                  <a href="#brief-intro" className="piece center">
                    Evlis Henry
                  <div className="after" />
                </a>
                <div className="piece right-col">
                  <img src="src/images/o.png" />
                </div>
              </div>
              <div className ="row middle">
                <a href="#about-section" className="piece left-col">
                  <div>About</div>
                  <div className="after" />
                </a>
                <div className="piece center">
                  <img src="src/images/x.png" />
                </div>
                <a href="#project-section" className="piece right-col">
                  <div>Projects</div>
                  <div className="after" />
                </a>
              </div>
              <div className ="row bottom">
                <div className="piece left-col">
                  <img src="src/images/x.png" />
                </div>
                  <a href="#resume-section" className="piece center">
                    <div>Resume</div>
                  <div className="after" />
                </a>
                <div className="piece right-col">
                  <img src="src/images/o.png" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

  )
}
export default Main;
