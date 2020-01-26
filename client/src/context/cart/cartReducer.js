import {
  ADD_TO_CART,
  DELETE_ITEM,
  MINUS_QUALITY
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existedItem = state.cart.find(item => (
        item.product.product_id === action.payload.product.product_id
      ))

      if (existedItem) {
        const index = state.cart.indexOf(existedItem)
        if (existedItem.quality < 10) {
          existedItem.quality += 1
        }
        return {
          ...state,
          cart: [...state.cart.slice(0, index), existedItem, ...state.cart.slice(index + 1)]
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      }

    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.product.product_id !== action.payload)
      }

    case MINUS_QUALITY:
      const productOfOperation = state.cart.find(item => (
        item.product.product_id === action.payload
      ))
      if (productOfOperation.quality > 1) {
        productOfOperation.quality -= 1
      }
      const index = state.cart.indexOf(productOfOperation)
      return {
        ...state,
        cart: [...state.cart.slice(0, index), productOfOperation, ...state.cart.slice(index + 1)]
      }
    default:
      return state
  }
}