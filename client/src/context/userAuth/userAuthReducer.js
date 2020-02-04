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

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      }
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    case USER_REGISTER_FAIL:
    case USER_AUTH_ERROR:
    case USER_LOGIN_FAIL:
    case USER_LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}