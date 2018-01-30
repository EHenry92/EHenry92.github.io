import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes'
import {Projects, About, Resume, Home, Main, Skills, Contact} from './components'

ReactDOM.render(
    <Main />,
  document.getElementById('nav-section')
);

ReactDOM.render(
    <Home />,
  document.getElementById('brief-intro')
);
ReactDOM.render(
    <Skills />,
  document.getElementById('skill-section')
);

ReactDOM.render(
    <About />,
  document.getElementById('about-section')
);

ReactDOM.render(
    <Projects />,
  document.getElementById('project-section')
);

ReactDOM.render(
    <Resume />,
  document.getElementById('resume-section')
);

let ticking = false;

// Cache elements
const header = document.getElementsByTagName("header")[0]; // We're interested in the first element
const sections = Array.from(document.querySelectorAll("section"));

// const menu = document.getElementById("menu");
// menu.addEventListener("click", () => {
//     let linksEl = document.getElementById('slide-space');
//     if (linksEl.style.display == 'flex') {
//       linksEl.style.display = 'none';
//     } else {
//       linksEl.style.display = 'flex';
//     }
// })

// Activation Margins
const HEADER_MARGIN = 0;
const SECTION_MARGIN = 300;

const scrollActions = () => {
//   // 1. Sets whether the header is visible or not
//   if (window.scrollY > HEADER_MARGIN) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }



  // 3. Loops through All sections, get their getBoundingClientRect() and sets them as "active" if they're visible
  // Cache `getBoundingClientRect` to avoid layout trashing (https://gist.github.com/collin/b857f20e7b0898264558ab55d0508336)
  const rects = sections.map(section => section.getBoundingClientRect());
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = rects[i];
    if (rect.top < window.innerHeight - SECTION_MARGIN && rect.bottom > 0) {
      section.classList.add("active");
        
        if(i==0){
                document.getElementById("name").style.display="none";
        }
    } else {
      section.classList.remove("active");
      if(i == 0) {
          document.getElementById("name").style.display="inline-block";
        }
    }

  }

  ticking = false;
};

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(scrollActions);
    ticking = true;
  }
});

scrollActions();
