import React from 'react';

const Contact = () => {
  return (
      <div className="social">
      <span className="category">
          <a href="mailto:Evlis.Henry@gmail.com"><img
          className= "tinyImg"
          src="client/components/images/social-mail.png" /></a>
      </span>
      <span className="category">
        <a href="https://www.github.com/ehenry92"><img
        className= "tinyImg"
        src="client/components/images/social-git.png" /></a>
      </span>
      <span  className="category">
        <a href="https://www.likedin.com/in/evils-henry" ><img  className= "tinyImg" src="client/components/images/social-linked.png" /></a>
      </span>
      <span  className="category">
        <a href="https://medium.com/@Silve"><img  className= "tinyImg" src="client/components/images/social-med.png" /></a>
      </span>
    </div>
  )
}
export default Contact;
