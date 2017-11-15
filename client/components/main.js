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
    </div>
  )
}
