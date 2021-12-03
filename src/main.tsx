import React from 'react'
import ReactDOM from 'react-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import App from './App'
import { address } from '../config/ip'

ReactDOM.render(
  <React.StrictMode>
    <App address={address} />
  </React.StrictMode>,
  document.getElementById('root')
)
