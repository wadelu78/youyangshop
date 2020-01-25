import {
  ADD_TO_CART,
  DELETE_ITEM
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existedItem = state.cart.find(item => (
        item.product.product_id === action.payload.product.product_id
      ))

      if (existedItem) {
        console.log('the product has already existed in the cart')
        const index = state.cart.indexOf(existedItem)
        existedItem.quality += 1
        console.log(existedItem.quality)
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

    default:
      return state
  }
}