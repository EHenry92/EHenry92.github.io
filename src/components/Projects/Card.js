import React from 'react';
import WithToggle from '../HOC/Toggle';


const Card = ({ cardData, isToggleOn, handleToggle }) => {
  console.log('updating',isToggleOn, cardData.name)
  return (
    <div className='card' key={cardData.name}>
      <div>
        <div onClick={handleToggle} >{cardData.name} </div>
      </div>
      {
        isToggleOn ?
          <>
            <div className='cardImg'>
              {displayMedia(cardData)}
            </div>
            <div className="card-details">
              {cardData.smallDesc}
            </div>
          </>
          :
          <>
          <div>{cardData.date} </div>

          <div>{cardData.largeDesc}</div>
        </>
      }
    </div>
  )
};

export default WithToggle(Card);


const displayMedia = (proj) => {
  if (proj.mobile) {
    return (
      <div className="carousel">
        {
          proj.images.map((image) => {
            return (
              <img key={image} className={`carousel-image ${proj.initials} mobile-image`} src={image} />
            )
          })
        }
      </div>
    )
  }
  else if (proj.images) {
    return (
      <div className="carousel">
        {
          proj.images.map((image, idx) => {
            return (
              idx === 0 ?
                <img key={image} className={`carousel-image ${proj.initials}`} src={image} />
                :
                <img key={image} className={`carousel-image ${proj.initials} hidden`} src={image} />
            )
          })
        }
      </div>
    )
  }
  else {
    return <iframe src={proj.video} frameBorder="0" allow="encrypted-media" allowFullScreen />
  }
}
