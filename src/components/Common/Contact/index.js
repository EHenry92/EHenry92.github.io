import React from 'react';
import './style.css';

const Contact = ({ includeResume = false }) => {
  return (
    <div className="social">
      <span className="category">
        <a href="mailto:Evlis.Henry@gmail.com"><img
          className="tinyImg"
          src="docs/images/social-mail.png" /></a>
      </span>
      <span className="category">
        <a href="https://www.github.com/ehenry92"><img
          className="tinyImg"
          src="docs/images/social-git.png" /></a>
      </span>
      <span className="category">
        <a href="https://www.likedin.com/in/evils-henry" ><img className="tinyImg" src="docs/images/social-linked.png" /></a>
      </span>
      <span className="category">
        <a href="https://medium.com/@Silve"><img className="tinyImg" src="docs/images/social-med.png" /></a>
      </span>
      {
        includeResume &&
        <span className="category">
          <a href="https://s3.amazonaws.com/henryeprofile/Evlis_Henry_Resume.pdf ">
            <img className="tinyImg" src="docs/images/resume_icon.png" />
          </a>
        </span>
      }
    </div>
  )
}
export default Contact;
