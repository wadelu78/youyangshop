import React, { useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css'

import AppNavbar from './components/layout/AppNavbar'

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit()
  })
  return (
    <div className="App">
      <AppNavbar />
    </div>
  );
}

export default App;
