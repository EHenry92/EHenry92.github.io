import React, {Component} from 'react';

export default class Projects extends Component {
        componentDidMount () {
          let vmImageIndex = 0, isImageIndex = 0;
          const vmImages = document.getElementsByClassName('carousel-image vm');
          const isImages = document.getElementsByClassName('carousel-image is');

          setInterval(() => {
            vmImages[vmImageIndex].classList.add('hidden');
              vmImageIndex++;
              if (vmImageIndex === vmImages.length) {vmImageIndex = 0;}
            vmImages[vmImageIndex].classList.remove('hidden');

            isImages[isImageIndex].classList.add('hidden');
            isImageIndex++;
            if (isImageIndex === isImages.length) {isImageIndex = 0;}
          isImages[isImageIndex].classList.remove('hidden');

          }, 3500);
        }
        render () {
          return (
          <div>
            <br />
            <div className="center"><h5>View my work!</h5></div>
            <div className="row ">
            <div className="col s1" />
                  <div className="card med col s3">
                  <div id="carousel" className="card-image waves-effect waves-block waves-light">
                        <img className="carousel-image is activator" src="client/components/images/ideaStormlogo.png" />
                        <img className="carousel-image is activator hidden" src="client/components/images/ideaStormRoom.png"/>
                        <img className="carousel-image is activator hidden" src="client/components/images/ideaStormhome.png"/>

                      </div>

                  <div className="card-content">
                    <span className="card-title activator">
                    <h5>IdeaStorm</h5>
                    <p>A virtual brainstorming tool for teams.</p>
                    <i className="material-icons right">more_vert</i></span>

                    <div><a href="http://idea-storm.herokuapp.com/">site</a></div>
                    <div><a href="https://github.com/EHenry92/meeb"> code</a></div>
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
                  {/* <div className="card-image waves-effect waves-block waves-light"> */}
                    {/* <img className="activator" src="client/components/images/VocabuMemory.png" /> */}
                    <div id="carousel" className="card-image waves-effect waves-block waves-light">
                        <img className="carousel-image vm activator" src="client/components/images/VocabuMemory.png" />
                        <img className="carousel-image vm activator hidden" src="client/components/images/VocabuMemoryGame.png" />
                      </div>

                  {/* </div> */}
                  <div className="card-content">
                    <span className="card-title activator">
                      <h5>VocabuMemory</h5>
                      <p>A memory matching card game.</p>
                    <i className="material-icons right">more_vert</i></span>
                    <p><a href="http://vocabumemory.herokuapp.com/">site</a></p>
                    <p><a href="https://github.com/EHenry92/VocabuMemory">code</a></p>

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
                        <h5>Dunder Mifflin Inc.</h5>
                        <p>An e-commerce website.</p>
                      <i className="material-icons right">more_vert</i></span>

                      <p><a href="https://dundermifflininc.herokuapp.com/">site</a></p>
                      <p><a href="https://github.com/EHenry92/dunder_mifflin">code</a></p>

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
}
