import React from 'react';
import {Link} from 'react-router-dom';

const Main = (props) => {
  const {children} = props;
  function burgerToggle () {
    let linksEl = document.getElementById('slide-space');
    let toggle = document.getElementById('menu');
    if (linksEl.style.display == 'flex') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'flex';
    }
  }

  return (
    <div />
  )
}
export default Main;
