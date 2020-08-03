import React from 'react'
import ReactDOM from 'react-dom'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import App from './components/App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <NotificationContainer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
