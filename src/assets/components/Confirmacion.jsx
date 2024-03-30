import { useState } from 'react'
import './styles/Confirmacion.css'

const Confirmacion = ({ confirmation, closeConfirm, setCloseConfirm }) => {

  const color = confirmation.text

  const handleFormClose = () => {
    setCloseConfirm(true)
  }

  return (
    
      <div className={`confirmation  ${closeConfirm && 'salir'} ${color}`}>
       <div onClick={handleFormClose} className="exit">❌</div>
        <p className="message">{`The user ${confirmation.first_name} 
         ${confirmation.last_name} has been ${confirmation.text} successfully`}</p>
      
    </div>
    
  )
}

export default Confirmacion