import React, { useState, useContext, useEffect } from 'react'
import UserAuthContext from '../context/userAuth/userAuthContext'
import AlertContext from '../context/alert/alertContext'

const UserLogin = props => {
  const alertContext = useContext(AlertContext)
  const userAuthContext = useContext(UserAuthContext)

  const { setAlert } = alertContext
  const { loginUser, error, clearErrors, isAuthenticated } = userAuthContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }


    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger')
      clearErrors()
    }
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger')
    } else {
      loginUser({
        username: email,
        password
      })
    }
  }

  return (
    <div>
      <h1 className="center-align">
        <span className="blue-text">User</span>&nbsp;Login
      </h1>
      <div className="row">
        <form onSubmit={onSubmit} className="col s10 offset-s1 m6 offset-m3 l4 offset-l4">
          <div className="input-field">
            <input type="email" id='email' name='email' value={email} onChange={onChange} />
            <label htmlFor='email'>Enter your email address</label>
          </div>
          <div className="input-field">
            <input type="password" id='password' name='password' value={password} onChange={onChange} />
            <label htmlFor='password'>Enter your password</label>
          </div>
          <div className="input-field center-align">
            <button className="btn waves-effect waves-light" type="submit" name="action">Login
    <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
