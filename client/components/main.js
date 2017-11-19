import React from 'react'
import {Link} from 'react-router-dom'

export default function Main (props) {
  const {children} = props

  return (
    <div>
      <nav>
    <div className="nav-wrapper light-green darken-1">
      <a href="/about" className="brand-logo">Evlis Henry</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>


      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
      </ul>
    </div>
  </nav>
      <hr />
      {children}
      <footer className="page-footer #cfd8dc blue-grey lighten-4 valign-wrapper justify-between">
      <div className="social">
      <span className="category">
          <Link to="https://www.github.com/ehenry92" target="_blank"><img
          className= "tinyImg"
          src="client/components/images/social-git.png" /></Link>
        </span>
        <span className="category">
          <Link to="https://www.likedin.com/in/evils-henry" target="_blank"><img className= "tinyImg" src="client/components/images/social-linked.png" /></Link>
        </span>
      </div>
        <div className="category">
            <h6 className=" white-text">
              Evlis Henry
            </h6>
        </div>
      </footer>
    </div>
  )
}
