import React from 'react'
import ReactDOM from 'react-dom/client'
// import AppSEO from './AppSEO' // Original Watt Utilities
import AppWattChoice from './AppWattChoice' // New Watt Choice design
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWattChoice />
  </React.StrictMode>,
)