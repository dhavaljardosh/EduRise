import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
  findWordFromSpeech
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const callApi = () => {
    console.log("Calling");
    findWordFromSpeech(transcript);
    resetTranscript();
    stopListening();
  };

  return (
    <div>
      <button
        onMouseDown={startListening}
        onMouseUp={() => callApi()}
        onTouchStart={startListening}
        onTouchEnd={() => callApi()}
        onMouseLeave={stopListening}
        className="listen-button"
      >
        <img src={require("../../assets/mic.png")} alt="listen" height="20px" />
      </button>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

var options = {
  autoStart: false
};

export default SpeechRecognition(options)(Dictaphone);
