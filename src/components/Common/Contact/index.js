import React from 'react';
import './style.css';

const Contact = () => {
  return (
      <div className="social">
      <span className="category">
          <a href="mailto:Evlis.Henry@gmail.com"><img
          className= "tinyImg"
          src="src/images/social-mail.png" /></a>
      </span>
      <span className="category">
        <a href="https://www.github.com/ehenry92"><img
        className= "tinyImg"
        src="src/images/social-git.png" /></a>
      </span>
      <span  className="category">
        <a href="https://www.likedin.com/in/evils-henry" ><img  className= "tinyImg" src="src/images/social-linked.png" /></a>
      </span>
      <span  className="category">
        <a href="https://medium.com/@Silve"><img  className= "tinyImg" src="src/images/social-med.png" /></a>
      </span>
    </div>
  )
}
export default Contact;
