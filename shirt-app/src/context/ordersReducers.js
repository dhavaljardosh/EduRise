import { ADD_ORDER } from "./types"

const addOrder = (order, state) => {
  //Adding an order to the previous orders
  const newOrders = [...state.orders, order]
  return {
    ...state,
    orders: newOrders,
  }
}

const reducers = (state, action) => {
  //Action - type, payload
  switch (action.type) {
    case ADD_ORDER:
      return addOrder(action.payload, state)
    default:
      return state
  }
}

export default reducers
