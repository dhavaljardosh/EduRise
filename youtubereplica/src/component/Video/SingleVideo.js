import React from "react";

export default ({ detail }) => {
  return (
    <div>
      {detail && (
        <div>
          <iframe
            title="selected Video"
            width="100%"
            height="400px"
            src={`https://www.youtube.com/embed/${detail.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5>{detail.title}</h5>
          <p>{detail.description}</p>
        </div>
      )}
    </div>
  );
};
