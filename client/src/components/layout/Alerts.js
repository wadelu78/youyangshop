import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alerts = () => {
  const alertContext = useContext(AlertContext)

  return (

    alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
      <div key={alert.id} className="container center-align red white-text">
        <p>{alert.msg}</p>
      </div>

    ))
  )
}

export default Alerts
