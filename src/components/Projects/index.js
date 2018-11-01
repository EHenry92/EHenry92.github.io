import React from "react";
import Card from "./Card";
import "./styles.css";
import WithFetch from "../HOC/withFetch";


const file_location = './src/components/Projects/projectData.txt';
const parseFunction = (lines) => {
  const recent = [];
  const archive = [];
  let isRecent = true;

  let target = {};
  for (const line of lines) {
    if (!line.trim()) {
      if (isRecent) { recent.push(target);}
      else { archive.push(target);}
      target = {};
      continue;
    } else if (line.trim() === 'ARCHIVE') {
      isRecent = false;
      continue;
    }

    const colon = line.indexOf(':');
    const prop = line.slice(0, colon).trim();
    let val = line.slice(colon + 1).trim();
    if (prop === 'images') {
      val = val.split(',');
    }
    target[`${prop}`] = val;
  }
  return ({archive, recent})
}

const Projects = (props) =>  {
  const { data} = props;
  return (
    <div>
      <div>
        <div className="center-text">
          <h2 className="proj-section-title"> {"Recent Projects"} </h2>
          <h4>{"Sept. 2017 - present"}</h4>
        </div>
        <div className="project-row">
          { data && data.recent && data.recent.map(item => (
            <Card key={item.name} data={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="center-text">
          <h2 className="proj-section-title"> {"Other Work"} </h2>
          <h4>{"Aug. 2008 - June 2011"}</h4>
        </div>
        <div className="project-row">
          { data && data.archive && data.archive.map(item => (
            <Card key={item.name} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default WithFetch(file_location, parseFunction)(Projects);
