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
  orders: [
    {
      id: 2,
      content: "Demo",
    },
  ],
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducers, initialState)

  const addOrder = order => {
    dispatch({
      type: ADD_ORDER,
      payload: {
        id: 21,
        content: "How's it going?",
      },
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
