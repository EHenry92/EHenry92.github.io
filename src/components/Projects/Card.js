import React from "react";
import WithToggle from "../HOC/withToggle";
import Carousel from "../Common/Carousel";

const Card = ({ data, isToggleOn, handleToggle }) => {
  return (
    <div className="card" key={data.name}>
      <div className={"card-header"}>
        <div className="card-title">
          {data.name}
          <p className="card-date">{data.date} </p>
        </div>
        {
          (data.spotlight || data.largeDesc) &&
          <span className="card-expand-icon" onClick={handleToggle}>
          {
            isToggleOn
            ? <i className="material-icons">more_vert</i>
            : <i className="material-icons">close</i>
          }
          </span>
        }
      </div>

      <div className={isToggleOn ? "card-info" : "card-info details"}>
        {isToggleOn
          ? <>
            <div className="card-major">{displayMedia(data)} </div>
            <p>{data.smallDesc}</p>
          </>
          : <>
            {data.spotlight
              ? data.spotlight
              : data.largeDesc}
          </>
        }
      </div>

      <div>
        <p className="card-tech">{data.tech}</p>

        <div className="card-links">
          {data.code &&
            <button
              onClick={() => { window.open(data.code, "_blank"); }}
              className="link-icon"
            >
              <i className="material-icons">code</i>
              Code
            </button>
          }
          {data.site &&
            <button
              onClick={() => { window.open(data.site, "_blank"); }}
              className="link-icon"
            >
              <i className="material-icons">launch</i>
              Site
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default WithToggle()(Card);

const displayMedia = proj => {
  if (proj.images) {
    return (
      <Carousel
        images={proj.images}
        prePend={"https://s3.amazonaws.com/henryeprofile/"}
      />
    );
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
