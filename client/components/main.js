import React from 'react';
import {Link} from 'react-router-dom';


const Main = (props) => {
  const {children} = props;
  $('.button-collapse').sideNav();

  return (
    <div>
      <div id="navigator" >
        <Link to="/">
          {/* Evlis Henry */}
          <img id="name" src="client/components/images/name.png" />
        </Link>
      </div>
      {children}
      <footer>
          <ul id="footerRow" className="center hide-on-med-and-down">
            <li><Link to="/"><h5>Home</h5></Link></li>
            <li><h5>-</h5></li>
            <li><Link to="/about"><h5>About</h5></Link></li>
            <li><h5>-</h5></li>
            <li><Link to="/work"><h5>Projects</h5></Link></li>
            <li><h5>-</h5></li>
            <li><Link to="/resume"><h5>Resume</h5></Link></li>
          </ul>
          <div id="footerCol" className="left hide-on-large-only">
            <ul id="slide-out" className="side-nav">
            <li><a href="/"><span className="name">Evlis Henry</span></a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/work">Projects</a></li>
            <li><a href="/resume">Resume</a></li>
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
      </footer>
    </div>
  )
}
export default Main;
