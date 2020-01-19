import React, { useEffect, useState } from "react";
import { wordRef, meaningRef } from "../firebase";

export default () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  useEffect(() => {
    wordRef.on("value", snap => {
      setWord(snap.val());
    });
    meaningRef.on("value", snap => {
      setMeaning(snap.val());
    });
  }, []);
  return (
    <div className="for-desktop">
      <div className="result-block">
        <div className="looking-for-block">
          <div className="lf-title">Word you're looking for:</div>
          <div className="lf-word">{word}</div>
        </div>
        <div>
          <div className="lf-meaning">{meaning}</div>
        </div>
      </div>
    </div>
  );
};
