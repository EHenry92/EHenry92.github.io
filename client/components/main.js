import React from 'react';
import {Link} from 'react-router-dom';


const Main = (props) => {
  const {children} = props;
  // Initialize collapse button
  $('.button-collapse').sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
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
      {/* <ul className="side-nav" id="mobile-demo side-nav">
        <li><Link to="/">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
      </ul> */}
    </div>
  </nav>
  <div className="hide-on-large-only">
    <ul id="slide-out" className="side-nav">
    <li><Link to="/"><h5>About</h5></Link></li>
          <li><Link to="/work"><h5>Projects</h5></Link></li>
          <li><Link to="/resume"><h5>Resume</h5></Link></li>
    </ul>
    <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
  </div>
      <hr />
      <hr className="colorBar" />

      {children}
      {/* <footer >
    <hr />
    <hr className="colorBar" />
    <h6 className=" white-text">
          Evlis Henry
        </h6>
  <div className="social">
      <span className="category">
          <Link to="mailto:ehenry692@hotmail.com"><img
           className= "tinyImg"
          src="client/components/images/social-mail.png" /></Link>
        </span>
    <span className="category">
      <Link to="https://www.github.com/ehenry92" target="_blank"><img
       className= "tinyImg"
      src="client/components/images/social-git.png" /></Link>
    </span>
    <span  className="category">
      <Link to="https://www.likedin.com/in/evils-henry" target="_blank"><img  className= "tinyImg" src="client/components/images/social-linked.png" /></Link>
    </span>
  </div>


</footer> */}
    </div>
  )
}
export default Main;
