import React from 'react'
import {Link} from 'react-router-dom'

export default function Main (props) {
  const {children} = props

  return (
    <div>
      <nav>
            <div>
              <Link to="/about">About</Link>
              <Link to="/Work">Work</Link>
              {/* <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link> */}
            </div>
      </nav>
      <hr />
      {children}
    </div>
  )
}
