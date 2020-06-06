import React, { useState, useContext } from "react"
import { Menu, Dropdown, Input, Button, Radio, Select } from "antd"
import { DownOutlined } from "@ant-design/icons"
import TShirt from "./TShirt"
import Theme1 from "./Theme1"
import Theme2 from "./Theme2"
import Theme3 from "./Theme3"
import Theme4 from "./Theme4"
import domtoimage from "dom-to-image"
import { OrdersContext } from "../context/ordersContext"

const { Option } = Select

export default ({ setThemeNumber, themeNumber, addOrder }) => {
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [theme1Style, setTheme1Style] = useState({})
  const [theme2Style, setTheme2Style] = useState({})
  const [theme3Style, setTheme3Style] = useState({})
  const [theme4Style, setTheme4Style] = useState({})
  const [orderFor, setOrderFor] = useState("")
  const [error, setError] = useState("")

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setSelectedTheme(1)}>Theme 1</Menu.Item>
      <Menu.Item onClick={() => setSelectedTheme(2)}>Theme 2</Menu.Item>
      <Menu.Item onClick={() => setSelectedTheme(3)}>Theme 3</Menu.Item>
      <Menu.Item onClick={() => setSelectedTheme(4)}>Theme 4</Menu.Item>
    </Menu>
  )

  const context = useContext(OrdersContext)
  console.log(context)

  const onSubmit = async () => {
    if (!orderFor) {
      setError("Order for is required")
      return
    }
    console.log(context)
    const image = await getImage()
    console.log(image)
    context.addOrder({
      size: "XL",
      image,
      orderFor,
    })

    setError("")
  }

  const getImage = () => {
    var node = document.getElementById("my-node")

    return domtoimage
      .toPng(node)
      .then(function(dataUrl) {
        var img = new Image()
        img.src = dataUrl
        console.log(dataUrl)
        return img.src
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error)
        return "NO IMG"
      })
  }

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
            themeNumber={selectedTheme}
            theme1Style={theme1Style}
            setTheme1Style={setTheme1Style}
            theme2Style={theme2Style}
            setTheme2Style={setTheme2Style}
            theme3Style={theme3Style}
            setTheme3Style={setTheme3Style}
            theme4Style={theme4Style}
            setTheme4Style={setTheme4Style}
          />
        </div>
        <div style={{ margin: 10, width: 400, marginTop: 30 }}>
          <div style={{ fontWeight: 600, color: "white" }}>
            Select Theme
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
                style={{ background: "white", padding: 10, marginLeft: 15 }}
              >
                {selectedTheme !== 0
                  ? `Theme ${selectedTheme}`
                  : "Select Theme"}{" "}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <hr color="black" style={{ marginTop: 20 }} />

          {selectedTheme === 1 && (
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
          )}

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
                onClick={onSubmit}
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
              {error.length > 0 && (
                <div style={{ color: "orange", fontSize: 20 }}>{error}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
