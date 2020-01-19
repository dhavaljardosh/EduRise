import React from "react";
import { ListGroup } from "react-bootstrap";

export default ({ videoList, changeSelection, selectedVideoId }) => {
  const changeSelectedVideo = data => {
    changeSelection(data);
  };

  return (
    <React.Fragment>
      {videoList.length > 0 &&
        videoList.map(data => {
          if (data.id !== selectedVideoId) {
            return (
              <ListGroup.Item
                key={data.id}
                onClick={() => changeSelectedVideo(data)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    marginBottom: 10,
                    padding: 10,
                    display: "flex"
                  }}
                >
                  <div>
                    <img
                      src={data.thumbnails.medium.url}
                      height="80px"
                      alt="thumbnail"
                    />
                  </div>
                  <div style={{ paddingLeft: 5 }}>
                    <div className="sugg-title">{data.title}</div>
                    <div className="sugg-channel">{data.channel.title}</div>
                  </div>
                </div>
              </ListGroup.Item>
            );
          }
        })}
    </React.Fragment>
  );
};
