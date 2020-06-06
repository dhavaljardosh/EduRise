import React, { createContext, useReducer } from "react"
import orderReducers from "./ordersReducers"
import { ADD_ORDER } from "./types"

export const OrdersContext = createContext({
  orders: [{ id: "2" }],
  addOrder: order => {
    console.log("order called")
  },
})
const initialState = {
  orders: [],
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducers, initialState)

  const addOrder = order => {
    dispatch({
      type: ADD_ORDER,
      payload: order,
    })
  }
  return (
    <OrdersContext.Provider
      value={{
        state: state.orders,
        addOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
