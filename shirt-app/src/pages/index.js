import React, { useReducer, useContext } from "react"
import { Link } from "gatsby"
import "antd/dist/antd.css"
import "../style.css"
import { OrdersContext } from "../context/ordersContext"
import OrdersReducer from "../context/ordersReducers"
import { ADD_ORDER } from "../context/types"
import Customization from "../components/Customization"

const initialState = {
  orders: [
    {
      id: 2,
      content: "Demo",
    },
  ],
}

const IndexPage = props => {
  // const [state, dispatch] = useReducer(OrdersReducer, initialState)

  // const addOrder = order => {
  //   dispatch({
  //     type: ADD_ORDER,
  //     payload: {
  //       id: 21,
  //       content: "How's it going?",
  //     },
  //   })
  // }
  const context = useContext(OrdersContext)
  return (
    <>
      <div className="navbarStyle">
        <Link to="/" className="rl">
          Shirt-Design
        </Link>
        <Link to="/orders" className="rl">
          Orders
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Customization />
      </div>
    </>
  )
}

export default IndexPage
