import React from "react";
import Contact from "../Common/Contact";
import "./styles.css";
import WithFetch from "../HOC/withFetch";

const file_location = "bio.txt";
const About = ({ data }) => {
  return (
    <div id="me">
      <div className="img-container">
        <img className="about-pic" src="docs/images/bigRock.jpg" />
      </div>

      <div id="bio-container">
        <div id="bio">
          {data &&
            data.map(
              (text, idx) =>
                idx === 0 ? (
                  <p key={text} className="center-text bio-sub-header">
                    <b>{text}</b>
                  </p>
                ) : (
                  <p key={text} className="bio-body">
                    {text}
                  </p>
                )
            )}
        <div className="center">
        <Contact />

        </div>
        </div>
      </div>
    </div>
  );
};

export default WithFetch(file_location)(About);
