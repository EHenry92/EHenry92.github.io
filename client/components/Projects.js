import React from 'react';

export default function Projects (){
  $(document).ready(function(){
    $('.carousel').carousel();
  });
      $('.carousel.carousel-slider').carousel({fullWidth: true, duration: 100});

      return (
      <div>
        <div className="center">Projects</div>
        <hr />
        <div className="row ">
        <div className="col s1" />
              <div className="card med col s3">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="client/components/images/ideaStormRoom.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator">
                <h5>IdeaStorm</h5>
                <p>A virtual brainstorming tool for teams.</p>
                <i className="material-icons right">more_vert</i></span>
                <p><a href="http://idea-storm.herokuapp.com/">visit</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title">IdeaStorm<i className="material-icons right">close</i></span>
                <p>A virtual collaboration tool for teams to share, discuss and connect ideas.</p>
                {/* <ul>Contributors:
                    <li>Erica Chai</li>
                    <li>Maria Betances</li>
                    <li>Blanca Sanchez</li>
                  </ul> */}
                <p>Built with: React, Redux, AWS, D3.js, React-Redux, materalize, Sequelize</p>
              </div>
          </div>
          <div className="col s1" />
              <div className="card med col s3">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="client/components/images/VocabuMemory.png" />
                {/* <div className="carousel carousel-slider black center" data-indicators="true">
                  <div className="carousel-item" >
                    <img src="client/components/images/VocabuMemoryhome.png" />
                  </div>
                  <div className="carousel-item">
                    <img  src="client/components/images/VocabuMemoryGame.png" />
                  </div>
                </div> */}

              </div>
              <div className="card-content">
                <span className="card-title activator">
                  <h5>VocabuMemory</h5>
                  <p>A memory matching card game.</p>
                <i className="material-icons right">more_vert</i></span>
                <p><a href="http://vocabumemory.herokuapp.com/">visit</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title">VocabuMemory<i className="material-icons right">close</i></span>
                <p>A matching card game in which successful matches are found by pairing a word with its definition.</p>
                <p>Built with: React, Redux, React-Redux, Materalize, Sequelize</p>
              </div>
          </div>
          <div className="col s1" />
              <div className="card med col col s3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="client/components/images/dunderMifflin.png" />
                </div>
                <div className="card-content">
                  <span className="card-title activator">
                    <h5>Dunder Mifflin Paper Company</h5>
                    <p>An e-commerce website.</p>
                  <i className="material-icons right">more_vert</i></span>
                  <p><a href="https://dundermifflininc.herokuapp.com/">visit</a></p>
                </div>
                <div className="card-reveal">
                  <span className="card-title">Dunder Mifflin Inc.<i className="material-icons right">close</i></span>
                  <p>An e-commerce site for the a paper company.</p>
                  {/* <ul>Contributors:
                    <li>Layla Hedges</li>
                    <li>Emily Jordan</li>
                    <li>April Rueb</li>
                  </ul> */}
                  <a>Built with: React, Redux, React-Redux, Materalize, Material-UI, Sequelize</a>
                </div>
              </div>
          </div>
    </div>

      )
  }

