import React from 'react';

const Projects = () => {
    const creations = [
      {
        name: 'IdeaStorm',
        site: 'http://idea-storm.herokuapp.com/',
        code: 'https://github.com/EHenry92/meeb',
        images: ['client/components/images/ideastormlogo.png', 'client/components/images/ideaStormRoom.png', 'client/components/images/ideaStormHome.png' ],
        smallDesc: 'A virtual brainstorming tool for teams.',
        largeDesc: 'A virtual collaboration tool for teams to share, discuss and connect ideas.',
        tech: 'React, Redux, AWS, D3.js, React-Redux, Sequelize.js',
        initials: 'is'
      },
      {
        name: 'VocabuMemory',
        site: 'http://vocabumemory.herokuapp.com/',
        code: 'https://github.com/EHenry92/VocabuMemory',
        images: ['client/components/images/VocabuMemory.png', 'client/components/images/vocabuMemoryGame.png' ],
        smallDesc: 'A virtual memory matching card game.',
        largeDesc: 'A matching card game in which successful matches are found by pairing a word with its definition.',
        tech: 'React, Redux, React-Redux, Sequelize<',
        initials: 'vm'
      },
      {
        name: 'Dunder Mifflin Inc.',
        site: '"https://dundermifflininc.herokuapp.com/"',
        code: '"https://github.com/EHenry92/dunder_mifflin"',
        images: ['client/components/images/dunderMifflinHome.png', 'client/components/images/dunderMifflincart.png'],
        smallDesc: 'An e-commerce website for a paper company.',
        largeDesc: 'An e-commerce single page, responsive webapplication  for the a paper company.',
        tech: 'React, Redux, React-Redux, Materalize, Material-UI, Sequelize',
        initials: 'dm'
      }
    ]
    const prefixes = ['vm', 'is', 'dm'];
    let indexes = [0, 0, 0];

    prefixes.forEach((proj, idx) => {
      const images = document.getElementsByClassName(`carousel-image ${proj}`);
      setInterval(() => {
        if (images.length > 0) {
        images[indexes[idx]].classList.add('hidden');
        indexes[idx]++;
          if (indexes[idx] === images.length) {indexes[idx] = 0;}
        images[indexes[idx]].classList.remove('hidden');
        }
      }, 3500);
    })
    function showData (evt) {
      evt.preventDefault();
      let clickedCard = document.getElementsByClassName(`reveal ${evt.target.name}`)[0].classList;
      clickedCard.add('show-reveal');
    }
    function hideData (evt) {
      evt.preventDefault();
      let clickedCard = document.getElementsByClassName(`reveal ${evt.target.name}`)[0].classList;
      clickedCard.remove('show-reveal');
    }


    return (
        <div>
       <div className="contained">
      <div className="center"><h1>Projects</h1></div>

        {
          creations.map((item) => {
            return (
              <div className="card" key={item.name}>
                <div className="card-face" >
                    <div className="carousel">
                      {
                        item.images.map((image, idx) => {
                            return (
                            idx === 0 ?
                            <img key={image} className={`carousel-image ${item.initials}`} src={image} />
                            :
                            <img key={image} className={`carousel-image ${item.initials} hidden`} src={image} />
                          )
                        })
                      }
                    </div>
                    <div className="card-content">
                      <span>

                        <div className="card-title">{item.name}</div>
                        <p>{item.smallDesc}</p>
                        <button className="material-icons right" name={item.initials} onClick={showData}>more_vert</button>
                      </span>
                      <p><a href={item.site} >site </a>
                      <a href= {item.code} >code</a></p>
                    </div>
                </div>
                <div className={`reveal ${item.initials}`}>
                  <span className="card-title">{item.name}<button className="right" name={item.initials} onClick={hideData}>X</button></span>
                  <p>{item.largeDesc}</p>
                  <a>Built with: {item.tech}</a>
                </div>
              </div>
          )
        })
      }
      </div>
      </div>
      )
    }

export default Projects;
