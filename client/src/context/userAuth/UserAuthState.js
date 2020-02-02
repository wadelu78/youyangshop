import React, { useReducer } from 'react'
import userAuthContext from './userAuthContext'
import userAuthReducer from './userAuthReducer'
import axios from 'axios'

import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  CLEAR_ERRORS
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
  const registerUser = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/users', formData, config)

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data
      })

    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.msg
      })
    }
  }
  //Login User
  //Logout

  //Clear Errors
  const clearErrors = () => dispatch({
    type: CLEAR_ERRORS
  })

  return (
    <userAuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      registerUser,
      clearErrors
    }}>
      {props.children}
    </userAuthContext.Provider>
  )
}

export default UserAuthState

