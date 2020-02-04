import React, { useReducer } from 'react'
import userAuthContext from './userAuthContext'
import userAuthReducer from './userAuthReducer'
import axios from 'axios'
import setUserAuthToken from '../../utils/setUserAuthToken'

import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  CLEAR_ERRORS,
  USER_LOADED,
  USER_AUTH_ERROR
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
  const loadUser = async () => {
    if (localStorage.token) {
      //console.log(localStorage.token)
      setUserAuthToken(localStorage.token)
    }


    try {
      const res = await axios.get('/api/auth')

      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: USER_AUTH_ERROR
      })
    }
  }
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

      loadUser()
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.msg
      })
    }
  }
  //Login User
  const loginUser = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/auth', formData, config)

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data
      })

      loadUser()
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response.data.msg
      })
    }
  }

  //Logout
  const logoutUser = () => dispatch({
    type: USER_LOGOUT
  })

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
      clearErrors,
      loadUser,
      loginUser,
      logoutUser
    }}>
      {props.children}
    </userAuthContext.Provider>
  )
}

export default UserAuthState

