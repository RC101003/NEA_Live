import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import './Home.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Intro />
  </React.StrictMode>
)
