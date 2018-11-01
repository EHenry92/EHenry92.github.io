import React from 'react';
import SlideDisplay from '../Common/SlideInOut';
import Contact from '../Common/Contact';
import WithFetch from '../HOC/withFetch';


const headlines = new Set(['Heading', 'SKILLS', 'EDUCATION', 'WORK EXPERIENCE']);
const file_location = './src/Evlis_Henry.txt';
const parseFunction = (lines) => {
  let formated = {};
  let currentHeadline = "";
  let item;

  for (const line of [...lines, " "]) {
    if (headlines.has(line.trim())) {
      currentHeadline = line.trim();
      formated[`${currentHeadline}`] = [];
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
        formated["SKILLS"].push({ heading, desc });
      }
    } else if (
      currentHeadline === "EDUCATION" ||
      currentHeadline === "WORK EXPERIENCE"
    ) {
      if (!line.trim()) {
        formated[`${currentHeadline}`].push(item);
        item = {};
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
        item.details.push(line);
      }
    }
  }
  return formated;
};

const Resume = (props) => {
  return (
    <>
      {props.data ? (
        <SlideDisplay
          data={props.data}
        />
      ) : (
          <div>Resume Here</div>
        )}
        <Contact includeResume={true} />
    </>
  );
}

export default WithFetch(file_location, parseFunction)(Resume);
