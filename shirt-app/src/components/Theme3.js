import React from "react"
import { Input } from "antd"
import { Select, Radio } from "antd"
const { Option } = Select

export default ({ customStyle, setStyle }) => {
  const changeTheme = (key, value) => {
    //Take the existing theme and add the new theme style to it
    var newStyle = { ...customStyle }
    newStyle[key] = value
    setStyle(newStyle)
  }
  return (
    <div>
      <div className="textInputFlex">
        <p className="w100"> Right Logo</p>
        <p>
          <Input
            placeholder="Basic usage"
            onChange={event => changeTheme("rightLogo", event.target.value)}
          />
        </p>
      </div>
      <div className="textInputFlex">
        <p className="w100">Left Logo</p>
        <p>
          <Input
            placeholder="Basic usage"
            onChange={event => changeTheme("leftLogo", event.target.value)}
          />
        </p>
      </div>
      <div className="textInputFlex">
        <p className="w100">Size</p>
        <div>
          <Select
            defaultValue="M"
            style={{ width: 120 }}
            onChange={value => changeTheme("stripeColor", value)}
          >
            <Option value="red">XS</Option>
            <Option value="blue">S</Option>
            <Option value="green">M</Option>
            <Option value="yellow">L</Option>
            <Option value="orange">XL</Option>
          </Select>
        </div>
      </div>
      <div className="textInputFlex">
        <p className="w100">Circle Color</p>
        <div>
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            onChange={event => changeTheme("stripeColor", event.target.value)}
          >
            <Radio.Button
              value="red"
              style={{ background: "red" }}
            ></Radio.Button>
            <Radio.Button
              value="blue"
              style={{ background: "blue" }}
            ></Radio.Button>
            <Radio.Button
              value="green"
              style={{ background: "green" }}
            ></Radio.Button>
            <Radio.Button
              value="orange"
              style={{ background: "orange" }}
            ></Radio.Button>
            <Radio.Button
              value="white"
              style={{ background: "white" }}
            ></Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
}
