import React from "react";
import Card from "./Card";
import "./styles.css";
import WithFetch from "../HOC/withFetch";

const file_location = "projectData.txt";
const parseFunction = lines => {
  const recent = [];
  const archive = [];
  let isRecent = true;

  let target = {};
  for (const line of lines) {
    if (!line.trim()) {
      if (isRecent) {
        recent.push(target);
      } else {
        archive.push(target);
      }
      target = {};
      continue;
    } else if (line.trim() === "ARCHIVE") {
      isRecent = false;
      continue;
    }

    const colon = line.indexOf(":");
    const prop = line.slice(0, colon).trim();
    let val = line.slice(colon + 1).trim();
    if (prop === "images") {
      val = val.split(",");
    }
    target[`${prop}`] = val;
  }
  return { archive, recent };
};

const Projects = props => {
  const { data } = props;
  return (
    <div>
      {data && (
        <>
          <ProjectGroup
            title={"Recent Projects"}
            subTitle={"Sept. 2017 - present"}
            data={data.recent}
          />
          <ProjectGroup
            title={"Other Work"}
            subTitle={"Aug. 2008 - June 2011"}
            data={data.archive}
          />
        </>
      )}
    </div>
  );
};
export default WithFetch(file_location, parseFunction)(Projects);


class ProjectGroup extends React.PureComponent{
  render () {
 const { title, subTitle, data } = this.props;
  return (
    <div>
      <div className="center-text proj-section-info">
        <h2 className="proj-section-title"> {title} </h2>
        {/* <h4 className="project-section-sub-title">{subTitle}</h4> */}
      </div>
      <div className="project-row">
        {data && data.map(item => <Card key={item.name} data={item} />)}
      </div>
    </div>
  )
  }
}
