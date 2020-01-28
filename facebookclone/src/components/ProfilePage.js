import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { uid } = useParams();
  return <div>{uid}</div>;
};
