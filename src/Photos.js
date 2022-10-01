import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 my-1" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid rounded"
                    src={photo.src.landscape}
                    alt="search word"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
