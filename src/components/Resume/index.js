import React, { PureComponent } from "react";
import SlideDisplay from "../Common/SlideInOut";
import Contact from "../Common/Contact";
import WithFetch from "../HOC/withFetch";
import "./styles.css";

const headlines = new Set(["SKILLS", "EDUCATION", "EXPERIENCE"]);
const file_location = "Evlis_Henry.txt";

const reduce = (parsedLines) => Object.values(
  parsedLines.reduce((acc, el) => {
    if (!acc[el.heading]) {
      acc[el.heading] = { value: [] };
    }
    acc[el.heading].value.push(el);
    return acc;
  }, {}));

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

  formatted["EXPERIENCE"] = reduce(formatted["EXPERIENCE"]);
  formatted["SKILLS"] = reduce(formatted["SKILLS"]);
  formatted["EDUCATION"] = reduce(formatted["EDUCATION"]);

  return formatted;
};

class Resume extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="resume-wrapper">
        {data && (
          <SlideDisplay
            data={data}
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
  }
}

export default WithFetch(file_location, parseFunction)(Resume);

class DisplayData extends PureComponent {
  render() {
    const { dataPoint, className, id } = this.props;
    return (
      <table className={className} id={id}>
        <tbody>
          {dataPoint.map(rows => {
            const { heading } = rows.value[0];
            return (
              <tr key={heading}>
                <td className="minor-col">
                  <b className="minor-col-title">{heading}</b>
                  {rows.value.map( item => {
                    item.date && item.date
                    return (item.date &&
                      <div key={item.date} className="minor-col-sub-title">
                        <i>{item.date}</i>
                      </div>
                    )}
                  )}
                </td>
                <td className="major-col">
                  {rows.value.map(value => (
                    <div key={value.subHeading ? value.subHeading : value.desc}>
                      <b className="major-col-title">{value.subHeading}</b>
                      <div className="major-col-sub-title">{value.desc}</div>
                      <ul className="major-col-detail">
                        {value.details &&
                          value.details.map(item => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
