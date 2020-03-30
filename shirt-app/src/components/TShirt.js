import React from "react"

export default () => {
  return (
    <div>
      <div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              height: 250,
              width: 250,
              backgroundColor: "green",
              position: "relative",
            }}
          >
            <img
              src={require("../images/shadow.png")}
              style={{ position: "absolute", height: "100%", opacity: 0.29 }}
            />
            <img
              src={require("../images/collar.png")}
              style={{ position: "absolute", height: "100%", opacity: 0.33 }}
            />
            <img
              src={require("../images/outerr.png")}
              style={{ position: "absolute", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
