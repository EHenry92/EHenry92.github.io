import React from 'react';
import {Link} from 'react-router-dom';


export default function Main (props) {
  const {children} = props
  return (
    <div>
      <nav>
    <div className="nav-wrapper black">
      <div href="/" id="name" className="brand-logo"><h2>Evlis Henry</h2></div>
      <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/"><h5>About</h5></Link></li>
        <li><h5>|</h5></li>
        <li><Link to="/work"><h5>Projects</h5></Link></li>
        <li><h5>|</h5></li>
        <li><Link to="/contact"><h5>Contact</h5></Link></li>
        <li><h5>|</h5></li>
        {/* <li><Link to="/resume"><h5>Resume</h5></Link></li> */}
      </ul>
      <ul className="side-nav" id="mobile-demo side-nav">
        <li><Link to="/">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
      </ul>
    </div>
  </nav>
      <hr />
      <hr className="colorBar" />

      {children}
    </div>
  )
}
