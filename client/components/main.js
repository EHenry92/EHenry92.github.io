import React from 'react';
import {Link} from 'react-router-dom';


const Main = (props) => {
  const {children} = props;
  $('.button-collapse').sideNav();

  return (
    <div>
      <div id="navigator" >
        <Link to="/">
          {/* Evlis Henry */}
          <img id="name" src="client/components/images/name.png" />
        </Link>
      </div>
      {children}
      <footer>
      <ul>
            <li><Link to="/"><h5>Home</h5></Link></li>
            <li><h5>-</h5></li>
            <li><Link to="/about"><h5>About</h5></Link></li>
            <li><h5>-</h5></li>
            <li><Link to="/work"><h5>Projects</h5></Link></li>
            <li><h5>-</h5></li>
            <li><Link to="/resume"><h5>Resume</h5></Link></li>
          </ul>
      </footer>
    </div>
  )
}
export default Main;
