import React, { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import SingleVideo from "./SingleVideo";
import YouTube from "simple-youtube-api";
import config from "../../config";
import Suggestions from "./Suggestions";
import playlists from "../../util/data";

const youtube = new YouTube(config.apiKey);

export default ({ searchString }) => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      const playlistVideos = await youtube.getPlaylist(
        playlists[getRandomInt(playlists.length - 1)]
      );

      const videosss = await playlistVideos.getVideos();
      console.log(videosss);
      const result = await youtube.searchVideos("Carry minati", 1);
      if (result.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setSelectedVideo(result[0]);

      console.log(result);
      setVideoList(videosss);
    };
    callApi();
  }, [searchString, setSelectedVideo]);

  const selectedVideoCallback = (videoDetail) => {
    setSelectedVideo(videoDetail);
  };

  const randomSelector = () => {
    const currentSelected = selectedVideo;
    console.log(currentSelected);
    console.log(videoList);
    let found = false;
    while (!found) {
      let newRandom = videoList[getRandomInt(videoList.length)];
      if (newRandom.id !== currentSelected.id) {
        setSelectedVideo(newRandom);
        found = true;
      }
    }
  };

  const PlayRandom = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={require("../../images/buton.png")}
          height="60px"
          alt="button here"
          style={{ cursor: "pointer", marginLeft: "auto" }}
          onClick={randomSelector}
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      <Col xs={12} lg={8} md={12}>
        {error ? (
          <h1>No result found, please try looking for something else.</h1>
        ) : (
          <SingleVideo detail={selectedVideo} />
        )}
      </Col>
      <Col xs={12} lg={4} md={12}>
        {!error && (
          <React.Fragment>
            <PlayRandom />
            <p
              style={{
                marginTop: 20,
                fontWeight: 700,
                fontSize: 30,
                fontFamily: "roboto",
              }}
            >
              FUN VIDEOS
            </p>
            <ListGroup style={{ maxHeight: "80vh", overflowY: "scroll" }}>
              <Suggestions
                videoList={videoList}
                changeSelection={selectedVideoCallback}
                selectedVideoId={selectedVideo.id}
              />
              {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
          </React.Fragment>
        )}
      </Col>
    </React.Fragment>
  );
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
