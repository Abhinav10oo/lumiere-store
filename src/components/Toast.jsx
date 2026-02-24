import { useState, useEffect } from 'react'
import '../styles/Toast.css'

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="toast">
      <p>{message}</p>
      <button onClick={onClose}>✕</button>
    </div>
  )
}

export default Toast