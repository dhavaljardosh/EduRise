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
            src={`https://www.youtube.com/embed/${detail.id}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; "
            allowFullScreen
            style={{ borderRadius: 30, overflow: "hidden" }}
          ></iframe>
          <h5 style={{ marginTop: 20 }}>{detail.title}</h5>
          <p>{detail.description}</p>
        </div>
      )}
    </div>
  );
};
