import React from 'react';

const showHide = (id, groupClass) => {
  const className = 'visible';
  var target = document.getElementById(id);
  for (let j = 0; j < groupClass.length; j++){
    const others = document.getElementsByClassName(`${groupClass[j]} ${className}`);
    for (let i = 0; i < others.length; i++) {
      if (others[i] !== target) {
        others[i].classList.remove(className);
      }
    }
  }
  if (target) {target.classList.toggle(className);}
};


const SlideInOut = ({targetId, targetGroup, children, className}) => {
  return (
    <div
      className = {`${className}`}
      onClick={() => showHide(targetId, targetGroup)}>
      {children}
    </div>
  );
};

export default SlideInOut;
