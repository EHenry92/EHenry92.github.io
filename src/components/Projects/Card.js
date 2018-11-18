import React from "react";
import WithToggle from "../HOC/withToggle";
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
            <div>
              <div className="cardImg">{displayMedia(data)} </div>
              <p className="card-tech">{data.tech}</p>

              </div>
              <div className="card-details">
                <p>{data.smallDesc}</p>
                <p className="card-date">{data.date} </p>
              </div>

            </div>
        ) : (
            <div>
            {
              data.spotlight
              ? data.spotlight
              :data.largeDesc


            }
            </div>
          )}
      </div>
    </div>
  );
};

export default WithToggle(Card);

const displayMedia = (proj )=> {
  if (proj.images) {
    return <Carousel images={proj.images}  prePend ={'https://s3.amazonaws.com/henryeprofile/'}/>;
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
