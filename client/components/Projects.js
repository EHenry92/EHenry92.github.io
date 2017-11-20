import React, {Component} from 'react';

export default class Projects extends Component {
  render () {
      return (
      <div>
        <h5>Projects</h5>
        <hr />
        <div className="row ">
         <div className="col s1" />
         <div className="card med col s4">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="client/components/images/VocabuMemory.png" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">VocabuMemory<i className="material-icons right">more_vert</i></span>
              <p><a href="#">link</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">VocabuMemory<i className="material-icons right">close</i></span>
              <p>A memeory matching game</p>
              <p>Built with: React, Redux, React-Redux, materalize, Sequelize</p>
            </div>
        </div>
        <div className="col s1" />
        <div className="card med col col s4">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="client/components/images/dm.png" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Dunder Mifflin Paper Company<i className="material-icons right">more_vert</i></span>
            <p><a href="https://dundermifflininc.herokuapp.com/">link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Dunder Mifflin Paper Company<i className="material-icons right">close</i></span>
            <p>An ecomerce site for the fictional Dunder Mifflin Paper Company</p>
            <p>Built with: React, Redux, React-Redux, materalize,material-ui, Sequelize</p>
          </div>
        </div>
        </div>
        {/* <div className="row ">
        <div className="col s1" />
         <div className="card med col s4">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="client/components/images/dictionary.jpg" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Guessing Game<i className="material-icons right">more_vert</i></span>
              <p><a href="#">link</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Guessing Game<i className="material-icons right">close</i></span>
            </div>
        </div>
        </div> */}
    </div>

      )
  }
}
