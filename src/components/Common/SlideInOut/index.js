import React from "react";
import SlideInOut from "./Slide";
import "./styles.css";

const SlideDisplay = ({ mainBar, data, DisplayData }) => {
  return (
      <div className="">
        {mainBar && mainBar()}
          <div id="section-list" className="flex-it sub-group-list">
            {displaySubGroup(data)}
          </div>
        <div className="displaySpace">
          {Object.keys(data).map((box, idx) => {
            let className = "slideIn-content showHide";
            className = idx === 0 ? `${className} visible` : className;
            return (
              <DisplayData
                key={`content-slideIn-${box}`}
                id={`content-slideIn-${box}`}
                dataPoint={data[box]}
                className={className}
              />
            );
          })}
        </div>
      </div>
  );
};

export default SlideDisplay;

const icons = {
  SKILLS: "build",
  EDUCATION: "school",
  "WORK EXPERIENCE": "work"
};
const displaySubGroup = data => {
  return Object.keys(data).map(dataGroup => (
    <SlideInOut
      key={dataGroup}
      targetId={`content-slideIn-${dataGroup}`}
      targetGroup={["slideIn-content"]}
      className="slideIn-subGroup-title"
    >
      <br />
      <i className="material-icons">{icons[dataGroup]}</i>
      <br />
      <p>
        <b>{dataGroup}</b>
      </p>
    </SlideInOut>
  ));
};
