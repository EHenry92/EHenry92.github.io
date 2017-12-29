import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const Contact = (props) => {
  return (
    <div>
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
    </div>
  )
}
export default Contact;
