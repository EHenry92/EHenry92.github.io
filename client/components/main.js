import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './index.js';


const Main = (props) => {
  const {children} = props;

  return (
    <div>
      <div id="navigator" >
        <Link to="/">
          <img id="name" src="client/components/images/name.png" />
        </Link>
      </div>
      {children}
        <NavBar />
    </div>
  )
}
export default Main;
