import React from "react";
import "./style.css";

const links = {
  mail: "mailto:Evlis.Henry@gmail.com",
  github: "https://www.github.com/ehenry92",
  linkedIn: "https://www.linkedin.com/in/evlis-henry",
  medium: "https://medium.com/@Silve",
  resume: "https://s3.amazonaws.com/henryeprofile/Evlis_Henry_Resume.pdf",
  iconLocation: "docs/images/"
};

const Contact = ({ includeResume = false }) => {
  return (
    <div className="social">
      <span className="category">
        <a href={links.mail}>
          <img className="tinyImg" src={`${links.iconLocation}social-mail.png`} />
        </a>
      </span>
      <span className="category">
        <a href={links.github}>
          <img className="tinyImg" src={`${links.iconLocation}social-git.png`} />
        </a>
      </span>
      <span className="category">
        <a href={links.linkedIn}>
          <img className="tinyImg" src={`${links.iconLocation}social-linked.png`} />
        </a>
      </span>
      <span className="category">
        <a href={links.medium}>
          <img className="tinyImg" src={`${links.iconLocation}social-med.png`} />
        </a>
      </span>
      {includeResume && (
        <span className="category">
          <a href={links.resume}>
            <img className="tinyImg" src={`${links.iconLocation}resume_icon.png`} />
          </a>
        </span>
      )}
    </div>
  );
};
export default Contact;
