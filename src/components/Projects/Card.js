import React from "react";
import WithToggle from "../HOC/Toggle";
import Carousel from "../Common/Carousel";

const Card = ({ data, isToggleOn, handleToggle }) => {
  return (
    <div className="card" key={data.name}>
      <div className={isToggleOn ? "card-header" : "card-header details"}>
        <p className="card-title">{data.name} </p>
        <span className="card-expand-icon" onClick={handleToggle}>
          { data.largeDesc &&
            (isToggleOn ? (
              <i className="material-icons">unfold_more</i>
            ) : (
                <i className="material-icons">unfold_less</i>
              ))
          }
        </span>
      </div>
      <div className={isToggleOn ? 'card-info' : 'card-info details'}>
        { isToggleOn ? (
            <div className="flex-it main-card-info">
              <div className="cardImg">{displayMedia(data)}
              <div>{data.tech}</div>

              </div>
              <div className="card-details">
                {data.largeDesc}
                <div className="card-date">{data.date} </div>
              </div>

            </div>
        ) : (
            <>
              <div>{data.largeDesc}</div>
            </>
          )}
      </div>
    </div>
  );
};

export default WithToggle(Card);

const displayMedia = proj => {
  // if (proj.mobile) {
  //   return (
  //     <div className="carousel">
  //       {proj.images.map(image => {
  //         return (
  //           <img
  //             key={image}
  //             className={`carousel-image ${proj.initials} mobile-image`}
  //             src={image}
  //           />
  //         );
  //       })}
  //     </div>
  //   );
  // } else
  if (proj.images) {
    return <Carousel images={proj.images} />;
  } else {
    return (
      <iframe
        src={proj.video}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
      />
    );
  }
};
