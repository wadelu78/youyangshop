import React, { useReducer } from 'react'
import cartContext from './cartContext'
import cartReducer from './cartReducer'

import {
  ADD_TO_CART,
  DELETE_ITEM,
  MINUS_QUALITY
} from '../types'

const CartState = props => {
  const initialState = {
    cart: [
      // {
      //   product: {
      //     product_id: '01001',
      //     name_chn: 'infant milk powder item 1'
      //   },
      //   quality: 2
      // },
      // {
      //   product: {
      //     product_id: '01002',
      //     name_chn: 'adult milk powder item 1'
      //   },
      //   quality: 1
      // },
      // {
      //   product: {
      //     product_id: '02001',
      //     name_chn: 'honey item 3'
      //   },
      //   quality: 1
      // }
    ]
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  //Add an item to the cart
  const addToCart = product => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
        quality: 1
      }
    })
  }
  //Delete an item in the cart
  const deleteItem = id => {
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  }



  //quality -1 the lower limit is 1
  const minusQuality = id => {
    dispatch({
      type: MINUS_QUALITY,
      payload: id
    })
  }
  return (
    <cartContext.Provider value={{
      cart: state.cart,
      addToCart,
      deleteItem,
      minusQuality
    }}>
      {props.children}
    </cartContext.Provider>
  )
}

export default CartState



