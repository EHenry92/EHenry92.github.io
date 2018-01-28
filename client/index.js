import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes'
import {Projects, About, Resume, Home} from './components'



ReactDOM.render(
    <Home />,
  document.getElementById('brief-intro')
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

const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
    let linksEl = document.getElementById('slide-space');
    if (linksEl.style.display == 'flex') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'flex';
    }
})

// Activation Margins
const HEADER_MARGIN = header.style.height;
const SECTION_MARGIN = 300;

const scrollActions = () => {
  // 1. Sets whether the header is visible or not
  if (window.scrollY > HEADER_MARGIN) {
    header.classList.add("active");
  } else {
    // header.classList.remove("active");
  }



  // 3. Loops through All sections, get their getBoundingClientRect() and sets them as "active" if they're visible
  // Cache `getBoundingClientRect` to avoid layout trashing (https://gist.github.com/collin/b857f20e7b0898264558ab55d0508336)
  const rects = sections.map(section => section.getBoundingClientRect());
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = rects[i];

    if (rect.top < window.innerHeight - SECTION_MARGIN && rect.bottom > 0) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
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

// //Introduction Page
// let introduction = document.getElementById("intro");


//     let words = "HEY, I'M EVLIS HENRY, A DEVELOPER, ENTHUSIASTIC PUZZLE SOLVER AND NATURALLY CURIOUS INDIVIDUAL.".split(' ').map(word => {return word.split('')});
//     let holder = {};
//     let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     function shuffleAlpha(alpha) {
//       let array = alpha.slice();
//       for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//         return array;
//     }
//     let randAlpha = shuffleAlpha(alphabet);
//     function startReveal (evt) {
//       evt.preventDefault();
//       document.getElementById('startUp').style.display = 'none';
//         let waitTime = 750;
//         for (let i = 0; i < randAlpha.length; i++) {
//           setTimeout(() =>{revealLetter(randAlpha[i])}, waitTime * i )
//       }
//     }
//     function revealLetter (letter) {
//       let list, cryptList, textnode;
//       list = document.getElementsByClassName(`${letter}spot`);
//             cryptList = document.getElementsByClassName(`${letter}letter`);

//             for (let j = 0; j < list.length; j++) {
//               textnode = document.createTextNode(`${letter}`);
//               list[j].removeChild(list[j].firstChild);
//               list[j].appendChild(textnode);
//               cryptList[j].classList.add('solved');
//             }
//     }
//     function enterChar(evt) {
//       evt.preventDefault();
//       let input = evt.target.value ? evt.target.value[0].toUpperCase() : ' ';
//       let spots = document.getElementsByClassName(evt.target.name);

//       for (let i = 0; i < spots.length ; i++) {
//         if (input == evt.target.name[0]) {
//           revealLetter(input)
//         }
//         spots[i].firstChild.value = input;
//       }
//     }
//     function highlight(evt) {
//       evt.preventDefault();
//       const spots = document.getElementsByClassName(evt.target.name);
//       for (let i = 0; i < spots.length ; i++) {
//         spots[i].classList.add('highlight-char-input');
//       }
//     }
//     function lowlight(evt) {
//       evt.preventDefault();
//       let oldSpots = document.getElementsByClassName('highlight-char-input');
//       for (let j = oldSpots.length; j > 0 ; j -= 1) {
//         oldSpots[0].classList.remove('highlight-char-input');
//       }
//     }
//     for (let i = 0; i < alphabet.length; i++) {
//       holder[alphabet[i]] = randAlpha[i];
//     }
    

//     words.forEach((word, wordIdx) => {
//       let eWord = document.createElement("div");
//       eWord.classList.add('word');
//         word.forEach((char, idx) => {
//           let eSpan = document.createElement("span");
//           let eDiv = document.createElement("div");
//           let eDivTwo = document.createElement("div");
//           eSpan.appendChild(eDiv);
//           eSpan.appendChild(eDivTwo);

//           if(holder[char]){
//             eSpan.classList.add("crypto char");
//             eDiv.classList.add(`${char}spot cryptoReveal`);
//             let eInp = document.createElement("input");
//             eInp.addEventListener("change", enterChar);
//             eInp.addEventListener("mouseEnter",highlight);
//             eInp.addEventListener("mouseLeave", lowlight);
//             eDiv.appendChild(eInp);
//             eDivTwo.classList.add(`${char}letter cryptoLetter`);
//             var node = document.createTextNode(`${holder[char]}`);
//             eDivTwo.appendChild(node);
//           }
//           else {
//             eDiv.classList.add(`${char}spot`);
//             var node = document.createTextNode(`${char}`);
//             eDiv.appendChild(node);
//             eDivTwo.classList.add('cryptoPunct');
//           }
//           eWord.appendChild(eSpan);
//         })
//       introduction.appendChild(eWord);
//     })
//     document.getElementById("startUp").addEventListener("click", startReveal);
    
  
