import React, { useReducer } from 'react'
import userAuthContext from './userAuthContext'
import userAuthReducer from './userAuthReducer'

import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../types'

const UserAuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(userAuthReducer, initialState)

  //Load User
  //Register User
  //Login User
  //Logout

  return (
    <userAuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error
    }}>
      {props.children}
    </userAuthContext.Provider>
  )
}

export default UserAuthState

