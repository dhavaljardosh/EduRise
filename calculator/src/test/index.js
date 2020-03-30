import React, { useEffect } from "react";
import { fileData } from "../util";
const fs = require("browserify-fs");

export default () => {
  useEffect(() => {
    console.log("DATA");
    fileData();
  }, []);
  return (
    <div>
      <h1>World</h1>
    </div>
  );
};
