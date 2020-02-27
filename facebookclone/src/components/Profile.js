import React, { useState } from "react";
import { Icon } from "react-materialize";
import EditProfile from "./EditProfile";
export default ({ userDetails }) => {
  const [editMode, setEditMode] = useState(false);

  const changeToFalse = () => {
    setEditMode(false);
  };

  return (
    <div className="outerBox m10">
      {editMode ? (
        <div>
          <EditProfile
            changeToFalse={changeToFalse}
            userDetails={userDetails}
          />
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  overflow: "hidden"
                }}
              >
                <img
                  src={
                    userDetails && userDetails.imageURL
                      ? userDetails.imageURL
                      : "https://specials-images.forbesimg.com/imageserve/5d2388f14c687b00085c0f91/416x416.jpg?background=000000&cropX1=0&cropX2=1559&cropY1=130&cropY2=1690"
                  }
                  alt="profile photi"
                  height="100%"
                />
              </div>
            </div>
            <div style={{ marginLeft: 10, flex: 1 }}>
              {userDetails && userDetails.firstName
                ? `${userDetails.firstName} ${userDetails.lastName}`
                : "Loading"}
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setEditMode(true)}
            >
              <Icon>edit</Icon>
            </div>
          </div>
          <div style={{ borderTop: "1px solid lightgray" }}>
            <div
              style={{
                color: "darkblue",
                fontFamily: "fantasy",
                marginTop: 10
              }}
            >
              About me:
            </div>
            <div style={{ fontSize: 12 }}>
              Software Engineer, loves to teach CS. Sports Football, Table
              Tennis, Basketball and Badminton
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
