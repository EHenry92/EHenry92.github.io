import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
  function burgerToggle () {
      let linksEl = document.getElementById('slide-space');
      let toggle = document.getElementById('menu');

      if (linksEl.style.display === 'flex') {
        linksEl.style.display = 'none';
      } else {
        linksEl.style.display = 'flex';
      }
	  }
		return (
    <footer>
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
				<div className="navNarrow">
					<div id="side-nav">
          <div id="slide-space">
            <ul id="slide-out">
                <li><Link onClick={burgerToggle} to="/"><h2>Evlis Henry</h2></Link></li>
                <li><div className="divider" /></li>
                <li><Link onClick={burgerToggle} to="/about"><h3>About</h3></Link></li>
                <li><Link onClick={burgerToggle} to="/work"><h3>Projects</h3></Link></li>
                <li><Link onClick={burgerToggle} to="/resume"><h3>Resume</h3></Link></li>
              </ul>
              <div id="overlay" />
          </div>
          <a id="menu" href="#" onClick={burgerToggle}><i className="material-icons">menu</i></a>
          </div>
				</div>
			</nav>
    </footer>

    )

};

export default NavBar;
