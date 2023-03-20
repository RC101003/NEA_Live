import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import './Home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Intro />

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  </React.StrictMode>
)
