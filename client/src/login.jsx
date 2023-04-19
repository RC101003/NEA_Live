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
            <p>Email</p>
            <input type="email" name="" placeholder="Enter Email" />
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password" />
            <input type="submit" name="" value="Login" />
            <a href="#">Lost your password?</a><br />
            <a href="#">Don't have an account?</a>
        </form>
    </div>
  </React.StrictMode>
)
