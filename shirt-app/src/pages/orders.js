import React, { useReducer, useContext } from "react"
import { OrdersContext } from "../context/ordersContext"
import { Link } from "gatsby"
import SingleOrder from "../components/SingleOrder"

const Orders = () => {
  const context = useContext(OrdersContext)
  return (
    <>
      <div className="navbarStyle">
        <Link to="/" className="rl">
          Shirt-Design
        </Link>
        <Link to="/" className="rl">
          Go back to Customization
        </Link>
      </div>

      {context.state.map((order, index) => (
        <SingleOrder order={order} key={index} />
      ))}
    </>
  )
}

export default Orders
