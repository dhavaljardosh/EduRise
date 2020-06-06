import React, { useState, useContext } from "react"
import { TwitterPicker } from "react-color"

const adidasLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png"
const barcaLogo = "https://pbs.twimg.com/media/DzNLs_dX4AAaYmX.png"

export default ({
  themeNumber,
  theme1Style,
  theme2Style,
  theme3Style,
  theme4Style,
  setTheme1Style,
  setTheme2Style,
  setTheme3Style,
  setTheme4Style,
}) => {
  const [color, setColor] = useState("#000EE0")

  return (
    <div>
      <div>
        <div
          id="my-node"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {themeNumber === 1 && (
            <ThemeOne customStyle={theme1Style} setStyle={setTheme1Style} />
          )}
          {themeNumber === 2 && (
            <ThemeTwo customStyle={theme2Style} setStyle={setTheme2Style} />
          )}
          {themeNumber === 3 && (
            <ThemeThree customStyle={theme3Style} setStyle={setTheme3Style} />
          )}
          {themeNumber === 4 && (
            <ThemeFour customStyle={theme4Style} setStyle={setTheme4Style} />
          )}
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                height: 250,
                width: 250,
                backgroundColor: color,
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

      <div style={{ marginTop: 20 }}>
        <TwitterPicker
          colors={[
            "#550000",
            "#0CAC68",
            "#FFF040",
            "#0019A3",
            "#A24A79",
            "#9F9F9F",
            "#313131",
            "#349146",
            "#FFFFFF",
            "#005C8D",
          ]}
          onChange={color => {
            setColor(color.hex)
          }}
        />
      </div>
    </div>
  )
}

//Theme One - Overlay on the T-Shirt
const ThemeOne = ({ customStyle }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        marginTop: 15,
      }}
    >
      <div
        style={{
          background: customStyle.backColor ? customStyle.backColor : "orange",
          display: "flex",
          justifyContent: "center",
          height: 45,
          width: 90,
          margin: "auto",
          marginTop: 40,
          borderRadius: 5,
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontWeight: "800",
            fontSize: 18,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: -2,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.topText ? customStyle.topText : "I Love"}
        </div>
        <div
          style={{
            fontWeight: "800",
            fontSize: 18,
            position: "absolute",
            marginBottom: 10,
            top: 18,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.bottomText ? customStyle.bottomText : "Ramtoo"}
        </div>
      </div>
    </div>
  )
}

//Theme Two - Overlay on the T-Shirt
const ThemeTwo = ({ customStyle }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        marginTop: 15,
      }}
    >
      <div
        style={{
          background: customStyle.backColor ? customStyle.backColor : "orange",
          display: "flex",
          justifyContent: "center",
          height: 90,
          width: 90,
          borderRadius: 50,
          margin: "auto",
          marginTop: 40,
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontWeight: "800",
            fontSize: 16,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 20,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.topText ? customStyle.topText : "I Love"}
        </div>
        <div
          style={{
            fontWeight: "800",
            fontSize: 16,
            position: "absolute",
            marginTop: 10,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.bottomText ? customStyle.bottomText : "Ramtoo"}
        </div>
      </div>
    </div>
  )
}

//Theme Three - Overlay on the T-Shirt
const ThemeThree = ({ customStyle }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        marginTop: 15,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 30,
          width: 100,
          borderRadius: 50,
          margin: "auto",
          marginTop: 35,
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            background: customStyle.stripeColor
              ? customStyle.stripeColor
              : "white",
            height: 2,
            borderRadius: 5,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 5px",
          }}
        >
          <div>
            <img
              // src={customStyle.leftLogo ? customStyle.leftLogo : adidasLogo}
              src={require("../images/adidas.png")}
              width="18px"
            />
          </div>
          <div
            style={{
              height: 25,
              width: 25,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <img
              src={require("../images/linkedin.png")}
              // src={customStyle.rightLogo ? customStyle.rightLogo : barcaLogo}
              height="18px"
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            background: customStyle.stripeColor
              ? customStyle.stripeColor
              : "white",
            height: 2,
            borderRadius: 5,
          }}
        ></div>
      </div>
    </div>
  )
}

//Theme Three - Overlay on the T-Shirt
const ThemeFour = ({ customStyle }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        marginTop: 15,
      }}
    >
      <div
        style={{
          background: customStyle.backColor ? customStyle.backColor : "maroon",
          display: "flex",
          justifyContent: "center",
          height: 110,
          width: 100,
          borderRadius: 20,
          margin: "auto",
          marginTop: 40,
          flexDirection: "row",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 5px",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 10,
            width: "100%",
          }}
        >
          <img
            src={
              customStyle.topLogo
                ? customStyle.topLogo
                : "https://pbs.twimg.com/media/DzNLs_dX4AAaYmX.png"
            }
            height="40px"
          />
        </div>
        <div
          style={{
            fontWeight: "800",
            fontSize: 18,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 50,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.topText ? customStyle.topText : "I Love"}
        </div>
        <div
          style={{
            fontWeight: "800",
            fontSize: 18,
            position: "absolute",
            marginTop: 10,
            top: 60,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.bottomText ? customStyle.bottomText : "Ramtoo"}
        </div>
      </div>
    </div>
  )
}
