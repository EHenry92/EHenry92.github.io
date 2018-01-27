import React from 'react';
import {Link} from 'react-router-dom';


const Main = (props) => {
  const {children} = props;
  function burgerToggle () {
    let linksEl = document.getElementById('slide-space');
    let toggle = document.getElementById('menu');
    if (linksEl.style.display === 'flex') {
      linksEl.style.display = 'none';
      toggle.style.display = 'block';
    } else {
      linksEl.style.display = 'flex';
      toggle.style.display = 'none';
    }
  }

  return (
    <div>
      <div id="navigator" >
        <nav onMouseEnter={burgerToggle} onMouseLeave={burgerToggle} onClick={burgerToggle}>
          <div className="navNarrow">
              <div id="side-nav">
              <div id="slide-space">
                    <div id="slide-out"className="tic">
                      <div className ="row top">
                        <div className="piece left">
                          <img src="client/components/images/x.png" />
                        </div>
                          <Link onClick={burgerToggle} to="/" className="piece center">
                         	  Evlis Henry
                    			<div className="after"></div>
                        </Link>
                        <div className="piece right">
                          <img src="client/components/images/o.png" />
                        </div>
                     </div>
                    	<div className ="row middle">
                        <Link onClick={burgerToggle} to="/about" className="piece left">
                         	  <div>About</div>
                    			<div className="after"></div>
                        </Link>
                          <div className="piece center">
                          <img src="client/components/images/x.png" />
                        </div>
                        <Link onClick={burgerToggle} to="/work" className="piece right">
                         	  <div>Projects</div>
                    			<div className="after"></div>
                        </Link>
                     </div>
                    	<div className ="row bottom">
                        <div className="piece left">
                    			<img src="client/components/images/x.png" />
                        </div>
                          <Link onClick={burgerToggle} to="/resume" className="piece center">
                         	  <div>Resume</div>
                    			<div className="after"></div>
                        </Link>
                        <div className="piece right">
                          <img src="client/components/images/o.png" />
                        </div>
                     </div>
                    
                    
                      
                    </div>
                  <div id="overlay" />
              </div>
              <a href="#">
                        <img id="menu" src="client/components/images/menu.png" />

              </a>
              </div>
            </div>
        </nav>
        <Link id="name" to="/">
          Evlis Henry
        </Link>
      </div>
      {children}
      <nav>
      <div className="navWide">
            <div id="footerRow" className="center">
                <div><Link to="/"><div>Home</div></Link></div>
                <div>-</div>
                <div><Link to="/about"><div>About</div></Link></div>
                <div>-</div>
                <div><Link to="/work"><div>Projects</div></Link></div>
                <div>-</div>
                <div><Link to="/resume"><div>Resume</div></Link></div>
              </div>
				</div>
      </nav>
    </div>
  )
}
export default Main;
