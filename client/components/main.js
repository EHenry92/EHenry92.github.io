import React from 'react';
import {Link} from 'react-router-dom';


const Main = (props) => {
  const {children} = props;
  $('.button-collapse').sideNav();

  return (
    <div>
      <nav>
    <div className="nav-wrapper black">
      <div href="/" id="name" className="brand-logo">Evlis Henry</div>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/"><h5>About</h5></Link></li>
        <li><h5>|</h5></li>
        <li><h5>|</h5></li>
        <li><Link to="/work"><h5>Projects</h5></Link></li>
        <li><h5>|</h5></li>
        {/* <li><Link to="/contact"><h5>Contact</h5></Link></li> */}
        <li><h5>|</h5></li>
        <li><Link to="/resume"><h5>Resume</h5></Link></li>
        <li><h5>|</h5></li>
        <li><h5>|</h5></li>
      </ul>
    </div>
  </nav>
  <div className="hide-on-large-only">
    <ul id="slide-out" className="side-nav">
          <li><div className="user-view">
            <a><span className="white-text name">Evlis Henry</span></a>
            <a><span className="white-text email">EHenry692@hotmail.com</span></a>
          </div></li>
          <li><Link to="/"><h5>About</h5></Link></li>
          <li><Link to="/work"><h5>Projects</h5></Link></li>
          <li><Link to="/resume"><h5>Resume</h5></Link></li>
    </ul>
    <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
  </div>
      <hr />
      <hr className="colorBar" />

      {children}
    </div>
  )
}
export default Main;
