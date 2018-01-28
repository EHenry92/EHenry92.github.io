import React from 'react';

const Contact = () => {
  return (
      <div className="social">
      <span className="category">
          <a href="mailto:ehenry692@hotmail.com"><img
          className= "tinyImg"
          src="client/components/images/social-mail.png" /></a>
      </span>
      <span className="category">
        <a href="https://www.github.com/ehenry92" target="_blank"><img
        className= "tinyImg"
        src="client/components/images/social-git.png" /></a>
      </span>
      <span  className="category">
        <a href="https://www.likedin.com/in/evils-henry" target="_blank"><img  className= "tinyImg" src="client/components/images/social-linked.png" /></a>
      </span>
    </div>
  )
}
export default Contact;
