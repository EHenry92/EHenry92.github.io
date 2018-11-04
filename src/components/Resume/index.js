import React from "react";
import SlideDisplay from "../Common/SlideInOut";
import Contact from "../Common/Contact";
import WithFetch from "../HOC/withFetch";
import "./styles.css";

const headlines = new Set([
  "Heading",
  "SKILLS",
  "EDUCATION",
  "EXPERIENCE"
]);
const file_location = "Evlis_Henry.txt";
const parseFunction = lines => {
  let formatted = {};
  let currentHeadline = "";
  let item;

  for (const line of [...lines, " "]) {
    if (headlines.has(line.trim())) {
      currentHeadline = line.trim();
      formatted[`${currentHeadline}`] = [];
      item = {};
      continue;
    }

    if (!currentHeadline) {
      continue;
    } else if (currentHeadline === "SKILLS") {
      if (line.trim()) {
        const colonIdx = line.indexOf(":");
        const heading = line.slice(0, colonIdx + 1);
        const desc = line.slice(colonIdx + 1);
        formatted["SKILLS"].push({ heading, desc });
      }
    } else if (
      currentHeadline === "EDUCATION" ||
      currentHeadline === "EXPERIENCE"
    ) {
      if (!line.trim()) {
        if (Object.keys(item).length > 0) {
          formatted[`${currentHeadline}`].push(item);
          item = {};
        }
      } else if (!item.heading) {
        item.heading = line;
      } else if (!item.subHeading) {
        const sepIdx = line.indexOf("|");
        const subHeading = line.slice(0, sepIdx - 1);
        const date = line.slice(sepIdx + 1);
        item.subHeading = subHeading;
        item.date = date;
      } else if (!item.desc) {
        item.desc = line;
      } else {
        if (!item.details) {
          item.details = [];
        }
        item.details.push(line.replace("*", "").trim());
      }
    }
  }
  return formatted;
};

const Resume = props => {
  return (
    <div className="resume-wrapper">
      {props.data && (
        <SlideDisplay
          data={props.data}
          DisplayData={DisplayData}
          mainBar={() => (
            <div className="flex-it res-top-bar">
              <div className="res-bar-title">{"Resume"}</div>
              <div className="res-links">
                <Contact includeResume={true} />
              </div>
            </div>
          )}
        />
      )}
    </div>
  );
};

export default WithFetch(file_location, parseFunction)(Resume);

const DisplayData = ({ dataPoint, className, id }) => {
  return (
    <table className={className} id={id}>
      <tbody>
        {dataPoint.map(row => (
          <tr key={row.heading}>
            <td className="minor-col">
              <b className="minor-col-title">{row.heading}</b>
              {row.date && (
                <div className="minor-col-sub-title">
                  <i>{row.date}</i>
                </div>
              )}
            </td>
            <td className="major-col">
              <b className="major-col-title">{row.subHeading}</b>
              <div className="major-col-sub-title">{row.desc}</div>
              <ul className="major-col-detail">
                {row.details &&
                  row.details.map(item => <li key={item}>{item}</li>)}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
