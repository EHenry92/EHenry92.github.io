import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Header from './components/Header';
import Intro from './components/Intro';
import Bio from './components/Bio';

const introSection = document.getElementById("brief-intro");
const headerSection = document.getElementById("header-section");
const aboutSection = document.getElementById("about-section");
const projectSection = document.getElementById("project-section");
const resumeSection = document.getElementById("resume-section");

ReactDOM.render(
  <Header />,
  headerSection
);

ReactDOM.render(
  <Intro />,
  introSection
);

ReactDOM.render(
  <Bio />,
  aboutSection
);

ReactDOM.render(
  <Main />,
  projectSection
);

ReactDOM.render(
  <Main />,
  resumeSection
);


const sections = Array.from(document.querySelectorAll('section'));

let ticking = false;
const SECTION_MARGIN = 300;

const scrollActions = () => {
  const rects = sections.map(section => section.getBoundingClientRect());
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = rects[i];
    if (rect.top < window.innerHeight - SECTION_MARGIN && rect.bottom > 0) {
      section.classList.add('active');

        if (i == 0){
                document.getElementById('name').style.display = 'none';
                document.getElementById('pic-box').classList.add('show');


        }
    } else {
      section.classList.remove('active');
      if (i === 0) {
          document.getElementById('name').style.display = 'inline-block';

        }
    }

  }

  ticking = false;
};

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(scrollActions);
    ticking = true;
  }
});

scrollActions();
