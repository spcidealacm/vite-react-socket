import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { address } from '../config/ip'

ReactDOM.render(
  <React.StrictMode>
    <App address={address} />
  </React.StrictMode>,
  document.getElementById('root')
)
