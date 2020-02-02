import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/alertContext'

import UserAuthContext from '../context/userAuth/userAuthContext'

const UserRegister = () => {
  const alertContext = useContext(AlertContext)
  const userAuthContext = useContext(UserAuthContext)

  const { setAlert } = alertContext
  const { registerUser, error, clearErrors } = userAuthContext

  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'danger')
      clearErrors()
    }
  }, [error])

  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: ''
  })

  const { email, password, password2 } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      registerUser({
        username: email,
        password
      })
    }
  }

  return (
    <div>
      <h1 className="center-align">
        <span className="blue-text">User</span>&nbsp;Register
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
          <div className="input-field">
            <input type="password" id='password2' name='password2' value={password2} onChange={onChange} />
            <label htmlFor='password2'>Repeat your password</label>
          </div>
          <div className="input-field center-align">
            <button className="btn waves-effect waves-light" type="submit" name="action">Register
    <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister
