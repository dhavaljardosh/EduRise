import React from "react";

export default ({ input }) => {
  return (
    <div className="screen">
      <div>{input.length === 0 ? "0" : input}</div>
    </div>
  );
};
