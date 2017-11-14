import React, {Component} from 'react';

export default class Projects extends Component {

  render () {
      return (
       <div>
         <h1>My Projects</h1>
         <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      {/* <img className="activator" src="images/office.jpg" /> */}
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">VocabuMemory<i className="material-icons right">more_vert</i></span>
      <p><a href="#">link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">VocabuMemory<i className="material-icons right">close</i></span>
      <p>A memeory matching game</p>
    </div>
  </div>
  <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      {/* <img className="activator" src="images/office.jpg" /> */}
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Dunder Mifflin Paper Company<i className="material-icons right">more_vert</i></span>
      <p><a href="#">link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Dunder Mifflin Paper Company<i className="material-icons right">close</i></span>
      <p>An ecomerce site for the Dunder Mifflin Paper Company</p>
    </div>
  </div>

       </div>

      )
  }
}
