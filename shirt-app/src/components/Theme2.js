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
        <p className="w100">Top Text</p>
        <p>
          <Input
            placeholder="Basic usage"
            onChange={event => changeTheme("topText", event.target.value)}
          />
        </p>
      </div>
      <div className="textInputFlex">
        <p className="w100">Bottom Text</p>
        <p>
          <Input
            placeholder="Basic usage"
            onChange={event => changeTheme("bottomText", event.target.value)}
          />
        </p>
      </div>
      <div className="textInputFlex">
        <p className="w100">Size</p>
        <div>
          <Select
            defaultValue="M"
            style={{ width: 120 }}
            onChange={value => changeTheme("size", value)}
          >
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
        </div>
      </div>
      <div className="textInputFlex">
        <p className="w100">Back Color</p>
        <div>
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            onChange={value => {
              changeTheme("backColor", value.target.value)
            }}
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
          </Radio.Group>
        </div>
      </div>
    </div>
  )
}
