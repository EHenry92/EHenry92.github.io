import React from "react";
import SlideInOut from "./Slide";
import "./styles.css";

const SlideDisplay = ({ data }) => {
  return (
    <div className="flex-it">
      <div className="flex-it">
        <div className="slideIn-titles">
          {/* // className="slideIn-title" */}
          <div className="rotate-text">Resume</div>
        </div>
        <div id="list-wrapper">
          <div id="section-list" className="sub-group-list">
            {displaySubGroup(data)}
          </div>
        </div>
        <div className="displaySpace">{displayData(data)}</div>
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
      {dataGroup}
    </SlideInOut>
  ));
};

const displayData = data =>
  Object.keys(data).map((box, idx) => {
    let className = "slideIn-content showHide";
    className = idx === 0 ? `${className} visible` : className;
    return (<table
      key={`content-slideIn-${box}`}
      id={`content-slideIn-${box}`}
      className={className}
    >
      <tbody>
        {data[box].map(row => (
          <tr key={row.heading}>
            <td className="minor-col">
              <b className="title">{row.heading}</b>
              {row.date && (
                <div className="small-text">
                  <i>{row.date}</i>
                </div>
              )}
            </td>
            <td className="majof-col">
              <b className="company">{row.subHeading}</b>
              <div className="company">{row.desc}</div>
              <ul className="data">
                {row.details &&
                  row.details.map(item => <li key={item}>{item}</li>)}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )});
