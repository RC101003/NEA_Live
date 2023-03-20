import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import './login.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className="login">
        <h1>Login</h1>
        <form>
            <p>Username</p>
            <input type="text" name="" placeholder="Enter Username" />
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password" />
            <input type="submit" name="" value="Login" />
            <a href="#">Lost your password?</a><br />
            <a href="#">Don't have an account?</a>
        </form>
    </div>
  </React.StrictMode>
)
