import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n' // Import de la configuration i18n
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
