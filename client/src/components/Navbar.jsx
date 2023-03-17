import React from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <header>
      <nav>
        <button>
          <span class="button_top">
              <a href="index.html">Home</a>
          </span>
        </button>
        <button>
          <span class="button_top">
              <a href="squad-selection.html">Squad Selection</a>
          </span>
        </button>
        <button>
          <span class="button_top">
              <a href="login.html">Login</a>
          </span>
        </button>
        <button>
          <span class="button_top">
              <a href="howToPlay.html">How-To-Play</a>
          </span>
        </button>
      </nav>
      <img src={Logo} alt="logo" />
    </header>
  )
}

export default Navbar