import React, { useReducer, useContext } from "react"
import { OrdersContext } from "../context/ordersContext"
import { Link } from "gatsby"

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

      <div>{JSON.stringify(context)}</div>
      {/* <button onClick={() => context.addOrder({ id: 3, content: "sdasdsd" })}>
        click
      </button> */}
    </>
  )
}

export default Orders
