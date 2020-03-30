import React, { useState } from "react"
import { Menu, Dropdown, Input, Button } from "antd"
import { DownOutlined } from "@ant-design/icons"
import TShirt from "./TShirt"

export default ({ setThemeNumber, themeNumber, addOrder }) => {
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [theme1Style, setTheme1Style] = useState({})
  const [theme2Style, setTheme2Style] = useState({})
  const [theme3Style, setTheme3Style] = useState({})
  const [theme4Style, setTheme4Style] = useState({})
  const [orderFor, setOrderFor] = useState("")
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            boxShadow: "1px 1px 2px rgba(0,0,0,0.4)",
            borderRadius: 10,
            background: "white",
            padding: 20,
            margin: 10,
          }}
        >
          <TShirt
          //   themeNumber={themeNumber}
          //   theme1Style={theme1Style}
          //   setTheme1Style={setTheme1Style}
          //   theme2Style={theme2Style}
          //   setTheme2Style={setTheme2Style}
          //   theme3Style={theme3Style}
          //   setTheme3Style={setTheme3Style}
          //   theme4Style={theme4Style}
          //   setTheme4Style={setTheme4Style}
          />
        </div>
        <div style={{ margin: 10, width: 400, marginTop: 30 }}>
          <div style={{ fontWeight: 600, color: "white" }}>Select Theme</div>
          <hr color="black" style={{ marginTop: 20 }} />
          {/* {selectedTheme === 1 && (
            <Theme1 customStyle={theme1Style} setStyle={setTheme1Style} />
          )}
          {selectedTheme === 2 && (
            <Theme2 customStyle={theme2Style} setStyle={setTheme2Style} />
          )}
          {selectedTheme === 3 && (
            <Theme3 customStyle={theme3Style} setStyle={setTheme3Style} />
          )}
          {selectedTheme === 4 && (
            <Theme4 customStyle={theme4Style} setStyle={setTheme4Style} />
          )} */}
          {selectedTheme !== 0 && (
            <div>
              <div className="textInputFlex">
                <p className="w100">Order for</p>
                <p>
                  <Input
                    placeholder="Basic usage"
                    onChange={event => setOrderFor(event.target.value)}
                  />
                </p>
              </div>
              <Button
                // onClick={onSubmit}
                type="default"
                style={{
                  background: "green",
                  border: "1px solid green",
                  color: "white",
                  fontWeight: 400,
                }}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
